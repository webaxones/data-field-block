import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const FieldTypeControl = ( { postType, selected, onChange } ) => {
	let field_types = [
		{
			name: __( 'Meta field', 'datafieldblock' ),
			slug: 'meta'
		},
		{
			name: __( 'Taxonomy terms list', 'datafieldblock' ),
			slug: 'taxonomy'
		},
		{
			name: __( 'Magic field', 'datafieldblock' ),
			slug: 'magic'
		},
	]

	'product' === postType && field_types.push(
		{
			name: __( 'WooCommerce attribute', 'datafieldblock' ),
			slug: 'attribute'
		}
	)

	return (
		<SelectControl
			label={ __( 'Display field types', 'datafieldblock' ) }
			value={ selected }
			options={ [
				{
					label: __( '-- Select a type --', 'datafieldblock' ),
					value: '',
				},
				...field_types.map( ( { name, slug } ) => ( {
					label: name,
					value: slug,
				} ) ),
			] }
			onChange={ onChange }
		/>
	)
}

export default FieldTypeControl
