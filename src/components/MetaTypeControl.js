import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const MetaTypeControl = ( { selected, onChange } ) => {
	const FIELD_TYPES = [
		{
			name: __( 'Custom field', 'datafieldblock' ),
			slug: 'customField'
		},
		{
			name: __( 'Advanced custom field', 'datafieldblock' ),
			slug: 'advancedCustomField'
		},
	]

	return (
		<SelectControl
			label={ __( 'Display custom field types', 'datafieldblock' ) }
			value={ selected }
			options={ [
				{
					label: __( '-- Select a custom field type --', 'datafieldblock' ),
					value: '',
				},
				...FIELD_TYPES.map( ( { name, slug } ) => ( {
					label: name,
					value: slug,
				} ) ),
			] }
			onChange={ onChange }
		/>
	)
}

export default MetaTypeControl
