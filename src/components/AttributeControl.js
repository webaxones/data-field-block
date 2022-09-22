import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const AttributeControl = ( { selected, onChange, postMetas } ) => {
	const productAttributesArray = []
	postMetas && postMetas.forEach( attribute => {
		productAttributesArray.push( { label: attribute['name'], value: attribute['id'] } )
	} )

	return (
		<SelectControl
			label={ __( 'Display attribute from this product', 'datafieldblock' ) }
			value={ selected }
			options={ [
				{
					label: __( '-- Select a WooCommerce attribute --', 'datafieldblock' ),
					value: '',
				},
				...productAttributesArray
			] }
			onChange={ onChange }
		/>
	)
}

export default AttributeControl
