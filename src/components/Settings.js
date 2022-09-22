import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, TextControl, SelectControl } from '@wordpress/components'
import FieldTypeControl from './FieldTypeControl'
import HTMLTagControl from './HTMLTagControl'
import MetaTypeControl from './MetaTypeControl'
import MetaControl from './MetaControl'
import TaxonomyControl from './TaxonomyControl'
import AttributeControl from './AttributeControl'
import { __ } from '@wordpress/i18n'

const Settings = ( { args, postType, attributes, setAttributes } ) => {
	const { fieldType, term, field, metaType, magicSuffix, textAlign, separator, title, tagName, counter, attributeId } = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<FieldTypeControl
						postType={ postType }
						selected={ fieldType }
						onChange={ ( value ) => {
							setAttributes( { fieldType: value } )
						} }
					/>
					{ 'magic' === fieldType && 
						<p>{ __( 'content within Magic field has to be coded with filter.', 'datafieldblock' ) }</p>
					}
				</PanelBody>
				{ 'magic' === fieldType && <PanelBody>
					<TextControl
						autoComplete='off'
						label={ __( 'Filter callback function name suffix ', 'datafieldblock' ) }
						value={ magicSuffix || '' }
						onChange={ ( value ) => {
							if ( null !== value.match( '^[a-z_]+$' ) ) {
								setAttributes( { magicSuffix: value } )
							}
						} }
						help={ __( 'Enter a unique suffix (lowercase letters without accent and underscores accepted) for the filter callback function name. The callback function will be named: "data_field_block_get_magic_content_{suffix}" so the suffix must be unique.', 'datafieldblock' ) }
					/>
					{ '' !== magicSuffix && undefined !== magicSuffix && <div><code style={ { fontSize:'9px' } }>{ 'data_field_block_get_magic_content_' + magicSuffix }</code></div> }
				</PanelBody>
				}
				{ 'meta' === fieldType && <PanelBody>
					<MetaTypeControl
						selected={ metaType }
						onChange={ ( value ) => {
							setAttributes( { metaType: value } )
						} }
					/>
					<MetaControl
						selected={ field }
						postMetas={ args }
						onChange={ ( value ) => {
							setAttributes( { field: value } )
						} }
					/>
					<p>{ __( 'content within tag can be seen in console and altered with filter:', 'datafieldblock' ) }<br/><code>data_field_block_get_block_content</code></p>
				</PanelBody> }
				{ 'attribute' === fieldType && <PanelBody>
					<AttributeControl
						selected={ attributeId }
						postMetas={ args }
						onChange={ ( value ) => {
							setAttributes( { attributeId: Number( value ) } )
						} }
					/>
					<p>{ __( 'content within tag can be seen in console and altered with filter:', 'datafieldblock' ) }<br/><code>data_field_block_get_block_content</code></p>
				</PanelBody> }
				{ 'taxonomy' === fieldType && <PanelBody>
					<TaxonomyControl
						taxonomies={ args }
						selected={ term }
						onChange={ ( value ) => {
							setAttributes( { term: value } )
						} }
					/>
					<TextControl
						autoComplete='off'
						label={ __( 'Separator', 'datafieldblock' ) }
						value={ separator || '' }
						onChange={ ( value ) => {
							setAttributes( { separator: value } )
						} }
						help={ __( 'Enter character(s) used to separate terms', 'datafieldblock' ) }
					/>
					<TextControl
						autoComplete='off'
						type={ 'number' }
						min={ 0 }
						max={ 500 }
						step={ 1 }
						label={ __( 'Number of elements', 'datafieldblock' ) }
						value={ counter || 0 }
						onChange={ ( value ) => {
							setAttributes( { counter: Number( value ) } )
						} }
						help={ __( 'Number of elements to display: 0 for all', 'datafieldblock' ) }
					/>
				</PanelBody> }
				<PanelBody>
					<TextControl
						autoComplete='off'
						label={ __( 'Title', 'datafieldblock' ) }
						value={ title || '' }
						onChange={ ( value ) => {
							setAttributes( { title: value } )
						} }
						help={ __( 'Title preceding the elements', 'datafieldblock' ) }
					/>
					<HTMLTagControl
						selected={ tagName }
						fieldType={ fieldType }
						onChange={ ( value ) => {
							setAttributes( { tagName: value } )
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } )
					} }
				/>
			</BlockControls>
		</>
	);
};

export default Settings
