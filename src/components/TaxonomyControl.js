import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const TaxonomyControl = ( { selected, onChange, taxonomies } ) => {
	return (
		<SelectControl
			label={ __( 'Display terms from this taxonomy', 'datafieldblock' ) }
			value={ selected }
			options={ [
				{
					label: __( '-- Select a taxonomy --', 'datafieldblock' ),
					value: '',
				},
				...taxonomies.map( ( { name, slug } ) => ( {
					label: name,
					value: slug,
				} ) ),
			] }
			onChange={ onChange }
		/>
	)
}

export default TaxonomyControl
