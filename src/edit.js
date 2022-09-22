import Settings from './components/Settings'
import usePostTerms from './hooks/usePostTerms'
import usePostTaxonomies from './hooks/usePostTaxonomies'
import useProduct from './hooks/useProduct'
import usePostMetas from './hooks/usePostMetas'
import selectTerm from './hooks/selectTerm'
import classnames from 'classnames'
import { Placeholder } from '@wordpress/components'
import { useBlockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import ServerSideRender from '@wordpress/server-side-render'

const edit = ( { attributes, setAttributes, context } ) => {
	const { fieldType, field, metaType, term, textAlign, counter, attributeId } = attributes
	const { postId, postType } = context

	if ( ! postId || ! postType ) {
		return ''
	}

	// Get current post type taxonomies
	const { postTaxonomies, isLoadingTaxonomies } = usePostTaxonomies( { postType } )

	const selectedTerm = selectTerm( term )
	// Get current post terms
	const { postTerms, hasPostTerms, isLoadingTerms } = usePostTerms( {
		postId,
		term: selectedTerm,
		counter
	} )

	// Get current post metas (custom fields & advanced custom fields)
	const { postMetas, postACFs, isLoadingMetas, hasPostMetas } = usePostMetas( {
		postType,
		postId
	} )

	// Get current post Product data if postType is product
	const { productData, isLoadingProduct } = useProduct( { postId, postType } )

	const hasPost = postId && postType

	const blockProps = useBlockProps( {
		className: classnames( {
			'data-field-block': true,
			[ `has-text-align-${ textAlign }` ]: textAlign,
			[ `taxonomy-${ term }` ]: term,
		} ),
	} )
	
	let args
	let elements

	// Terms list coming from post
	if ( 'taxonomy' === fieldType ) {
		args     = postTaxonomies
		elements = postTerms && postTerms.map( term => { return term.id } )
	}

	// Metadata coming from post
	if ( ( 'meta' === fieldType && 'product' !== postType && ! isLoadingMetas )
	  || ( 'meta' === fieldType && 'product' === postType && 'advancedCustomField' === metaType && ! isLoadingMetas ) ) {
		args = 'customField' === metaType ? postMetas : postACFs
		elements = field
	}

	// Metadata coming from product
	if ( 'meta' === fieldType && 'product' === postType && 'customField' === metaType && ! isLoadingProduct && 'meta_data' in productData ) {
		args = {}
		productData.meta_data.forEach( element => {
			args[ element.key ] = element.value
		} )
		elements = field
	}

	// Attribute coming from product
	if ( 'attribute' === fieldType && 'product' === postType && ! isLoadingProduct && 'attributes' in productData ) {
		args = productData.attributes
		elements = attributeId
	}

	if ( 'magic' === fieldType ) {
		elements = {}
	}

	// KeepItInProductionForDevs
	args && console.log( '%c Data:', 'color:gold', args )

	return (
		<div { ...blockProps }>
			{ hasPost && (
				<Settings
					args={ args }
					postType={ postType }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }
			{ term && isLoadingTerms && (
				<Placeholder
					icon='database'
					label={ __( 'Loading data…', 'datafieldblock' ) }
				/>
			) }
			{ ! isLoadingTaxonomies && (
				( 'taxonomy' === fieldType && term && ! isLoadingTerms && hasPostTerms ) || 
				( 'meta' === fieldType && field && 'product' !== postType && ! isLoadingMetas && hasPostMetas ) || 
				( 'meta' === fieldType && field && 'product' === postType && ! isLoadingProduct ) || 
				( 'attribute' === fieldType && attributeId && ! isLoadingProduct ) || 
				( 'magic' === fieldType )
				) && (
				<ServerSideRender
					attributes={ attributes }
					block='datafieldblock/data'
					urlQueryArgs={ {
						previewPostElements: elements,
						postId: postId
					} }
				/>
			) }
			{ ! fieldType && (
				<Placeholder
					icon='database'
					label={ __( 'Data field', 'datafieldblock' ) }
					instructions={ __(
						'Please, select what you want to display',
						'datafieldblock'
					) }
				/>
			) }
		</div>
	)
}

export default edit