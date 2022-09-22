<?php
/**
 * Plugin Name:       Data Field Block
 * Description:       Meta field OR Taxonomy terms list OR WooCommerce attribute
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            So many people
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       data-field-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function data_field_block_init() {
	register_block_type(
		__DIR__ . '/build',
		[
			'render_callback' => 'data_field_block_render_callback',
		]
	);
}
add_action( 'init', 'data_field_block_init' );

/**
 * Render the block Data field block
 *
 * @param  array     $attributes   Block attributes
 * @param  string    $content      Block content
 * @param  \WP_Block $block        Block
 *
 * @return void
 */
function data_field_block_render_callback( array $attributes, string $content, \WP_Block $block ) {
	$is_editor = false;
	if ( ( isset( $_GET ) && isset( $_GET['context'] ) && 'edit' === $_GET['context'] ) // phpcs:ignore
		|| ( isset( $_GET ) && isset( $_GET['action'] ) && 'edit' === $_GET['action'] ) ) { // phpcs:ignore
		$is_editor = true;
	}

	$post_id = ( ! isset( $block->context['postId'] ) && isset( $_GET['postId'] ) ) ? $_GET['postId'] : $block->context['postId']; // phpcs:ignore

	if ( ! isset( $attributes['fieldType'] ) ) {
		return '';
	}
	$fieldType = $attributes['fieldType'];

	if ( ! isset( $post_id ) ) {
		return '';
	}

	if ( 'meta' === $fieldType && ! isset( $attributes['field'] ) ) {
		return '';
	}

	if ( 'attribute' === $fieldType && ! isset( $attributes['attributeId'] ) ) {
		return '';
	}

	if ( 'taxonomy' === $fieldType && ( ! isset( $attributes['term'] ) || ! is_taxonomy_viewable( $attributes['term'] ?? '' ) ) ) {
		return '';
	}

	$tag_name = $attributes['tagName'] ?? 'span';
	$html_tag = explode( '>', $tag_name );

	if ( 'taxonomy' === $fieldType ) {
		return data_field_block_get_taxonomy_render( $is_editor, absint( $post_id ), $attributes, $html_tag );
	}

	if ( 'meta' === $fieldType ) {
		return data_field_block_get_meta_render( $is_editor, absint( $post_id ), $attributes, $html_tag, $block );
	}

	if ( 'attribute' === $fieldType ) {
		return data_field_block_get_woocommerce_attribute_render( $is_editor, absint( $post_id ), $attributes, $html_tag );
	}

	if ( 'magic' === $fieldType ) {
		return data_field_block_get_magic_render( $is_editor, absint( $post_id ), $attributes, $html_tag, $block );
	}

	return '';
}

/**
 * Get Terms list content for given taxonomy field
 *
 * @param  bool   $is_editor   Are we in preview in editor?
 * @param  int    $post_id      ID of the current post
 * @param  array  $attributes   Block attributes
 * @param  array  $html_tag     HTML Tag element wrapper
 *
 * @return string $render       Render of terms list
 */
function data_field_block_get_taxonomy_render( bool $is_editor, int $post_id, array $attributes, array $html_tag ) {
	$preview_post_terms = [];
	if ( $is_editor && isset( $_GET['previewPostElements'] ) && is_array( $_GET['previewPostElements'] ) ) { // phpcs:ignore
		$preview_post_terms = array_filter( array_map( 'absint', $_GET['previewPostElements'] ) ); // phpcs:ignore
	}

	$post_terms = [];
	if ( empty( $preview_post_terms ) ) {
		$post_terms = get_the_terms( $post_id, $attributes['term'] );
		$post_terms = $attributes['counter'] > 0 ? array_slice( $post_terms, 0, $attributes['counter'] ) : $post_terms;
	}

	if ( count( $preview_post_terms ) > 0 ) {
		$post_terms = array_map( 'get_term', $preview_post_terms );
	}

	if ( is_wp_error( $post_terms ) ) {
		return '';
	}

	if ( empty( $post_terms ) ) {
		return get_taxonomy( $attributes['term'] )->labels->no_terms ?? __( 'Term items not found.', 'data-field-block' );
	}

	$classes = "taxonomy-{$attributes['term']}";
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= " has-text-align-{$attributes['textAlign']}";
	}

	$separator = empty( $attributes['separator'] ) ? ' ' : $attributes['separator'];

	$wrapper_attributes = ! $is_editor ? get_block_wrapper_attributes( [ 'class' => $classes ] ) : '';

	$elements = [];
	foreach ( $post_terms as $term ) {
		$element = get_term_link( $term, $attributes['term'] );
		if ( is_wp_error( $element ) ) {
			return $element;
		}

		$style = $is_editor ? 'style="pointer-events:none;"' : '';

		if ( 'a' === $html_tag[0] ) {
			$elements[] = sprintf(
				'<%s class="data-field-block-post-term-link" %s href="%s" rel="tag">%s</%s>',
				esc_attr( $html_tag[0] ),
				esc_html( $style ),
				esc_url( $element ),
				esc_html( $term->name ),
				esc_attr( $html_tag[0] ),
			);
		}

		if ( 1 === count( $html_tag ) && 'a' !== $html_tag[0] ) {
			$elements[] = sprintf(
				'<%s class="data-field-block-post-term">%s</%s>',
				esc_attr( $html_tag[0] ),
				esc_html( $term->name ),
				esc_attr( $html_tag[0] ),
			);
		}

		if ( 2 === count( $html_tag ) ) {
			$elements[] = sprintf(
				'<%s><%s class="data-field-block-post-term-link" %s href="%s" rel="tag">%s</%s></%s>',
				esc_attr( $html_tag[0] ),
				esc_attr( $html_tag[1] ),
				esc_html( $style ),
				esc_url( $element ),
				esc_html( $term->name ),
				esc_attr( $html_tag[1] ),
				esc_attr( $html_tag[0] ),
			);
		}
	}

	$title = $attributes['title'] ?? '';
	$title = '' !== $title ? '<span class="data-field-block__title">' . $title . '</span>' : '';

	$render = sprintf(
		'%s <div %s>%s</div>',
		$title, // phpcs:ignore
		$wrapper_attributes, // phpcs:ignore
		implode( '<span class="wp-block-post-terms__separator">' . esc_html( $separator ) . '</span>', $elements ),
	);

	if ( empty( $elements ) ) {
		return '';
	}
	return $render;
}

/**
 * Get Metadata content for given post meta key
 *
 * @param  bool      $is_editor   Are we in preview in editor?
 * @param  int       $post_id      ID of the current post
 * @param  array     $attributes   Block attributes
 * @param  array     $html_tag     HTML Tag element wrapper
 * @param  \WP_Block $block     Block
 *
 * @return void
 */
function data_field_block_get_meta_render( bool $is_editor, int $post_id, array $attributes, array $html_tag, \WP_Block $block ) {
	$content = '';

	if ( 'meta' === $attributes['fieldType'] && 'customField' === $attributes['metaType'] ) {
		$data    = get_post_meta( $post_id, $attributes['field'], true );
		$content = is_array( $data ) ? wp_json_encode( $data ) : $data;
	}

	if ( 'meta' === $attributes['fieldType'] && 'advancedCustomField' === $attributes['metaType'] && function_exists( 'get_field' ) ) {
		$data    = get_field( $attributes['field'], $post_id );
		$content = is_array( $data ) ? wp_json_encode( $data ) : $data;
	}

	$content = apply_filters( 'data_field_block_get_block_content', $content, $attributes, $block, $post_id );

	if ( '' === $content ) {
		return '';
	}

	$classes = 'data-field-block-post-meta';
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= " has-text-align-{$attributes['textAlign']}";
	}

	$title = $attributes['title'] ?? '';
	$title = '' !== $title ? '<span class="data-field-block__title">' . $title . '</span>' : '';

	$render = sprintf(
		'%s <%s class="%s">%s</%s>',
		$title, // phpcs:ignore
		esc_attr( $html_tag[0] ),
		$classes,
		$content, // phpcs:ignore
		esc_attr( $html_tag[0] ),
	);

	return $render;
}

/**
 * Get Magic content with Hook
 *
 * @param  bool   $is_editor   Are we in preview in editor?
 * @param  int    $post_id      ID of the current post
 * @param  array  $attributes   Block attributes
 * @param  array  $html_tag     HTML Tag element wrapper
 * @param  \WP_Block $block     Block
 *
 * @return void
 */
function data_field_block_get_magic_render( bool $is_editor, int $post_id, array $attributes, array $html_tag, \WP_Block $block ) {
	$content = $is_editor ? '<p>' . __( 'Content to create with hook.', 'data-field-block' ) . '</p>' : '';

	if ( ! isset( $attributes['magicSuffix'] ) || '' === $attributes['magicSuffix'] ) {
		return $content;
	}


	$content = apply_filters( 'data_field_block_get_magic_content_' . esc_attr( $attributes['magicSuffix'] ), $content, $attributes, $block, $post_id );

	if ( '' === $content ) {
		return '';
	}

	$classes = 'data-field-block-custom-data';
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= " has-text-align-{$attributes['textAlign']}";
	}

	$title = $attributes['title'] ?? '';
	$title = '' !== $title ? '<span class="data-field-block__title">' . $title . '</span>' : '';

	$render = sprintf(
		'%s <%s class="%s">%s</%s>',
		$title, // phpcs:ignore
		esc_attr( $html_tag[0] ),
		$classes,
		$content, // phpcs:ignore
		esc_attr( $html_tag[0] ),
	);

	return $render;
}

/**
 * Get WooCommerce Attribute content for given post meta key
 *
 * @param  bool      $is_editor
 * @param  int       $post_id
 * @param  array     $attributes
 * @param  array     $html_tag
 * @param  \WP_Block $block
 *
 * @return void
 */
function data_field_block_get_woocommerce_attribute_render( bool $is_editor, int $post_id, array $attributes, array $html_tag ) {
	$product_attribute_id = (int) $attributes['attributeId'] ?? 0;
	$separator            = $attributes['separator'] ?? ',';

	if ( ! function_exists( 'wc_get_product' ) ) {
		return '';
	}

	$product = wc_get_product( $post_id );

	if ( ! $product || is_null( $product ) ) {
		return '';
	}

	$product_attributes = array_filter(
		$product->get_attributes(),
		function ( \WC_Product_Attribute $product_attribute ) use ( $product_attribute_id ) {
			return $product_attribute->get_id() === $product_attribute_id;
		}
	);

	if ( empty( $product_attributes ) ) {
		return '';
	}

	$attribute = reset( $product_attributes );
	$values    = [];
	if ( $attribute->is_taxonomy() ) {
		$attribute_values = wc_get_product_terms( $product->get_id(), $attribute->get_name(), [ 'fields' => 'all' ] );
		foreach ( $attribute_values as $attribute_value ) {
			$values[] = $attribute_value->name;
		}
	} else {
		$values = $attribute->get_options();
	}

	$classes = 'data-field-block-post-wcattribute';
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= " has-text-align-{$attributes['textAlign']}";
	}

	$title = $attributes['title'] ?? '';
	$title = '' !== $title ? '<span class="data-field-block__title">' . $title . '</span>' : '';

	$render = sprintf(
		'%s <%s class="%s">%s</%s>',
		$title, // phpcs:ignore
		esc_attr( $html_tag[0] ),
		$classes,
		esc_html( implode( $separator, $values ) ),
		esc_attr( $html_tag[0] ),
	);

	if ( empty( $values ) ) {
		return '';
	}

	return $render;
}
