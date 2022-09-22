import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const MetaControl = ( { selected, onChange, postMetas } ) => {
	const postMetasArray = Object.entries( postMetas ).map( ( postMeta ) => ( {
		label: postMeta[0],
		value: postMeta[0],
	} ) )

	return (
		<SelectControl
			label={ __( 'Display meta from this post type', 'datafieldblock' ) }
			value={ selected }
			options={ [
				{
					label: __( '-- Select a meta --', 'datafieldblock' ),
					value: '',
				},
				...postMetasArray
			] }
			onChange={ onChange }
		/>
	)
}

export default MetaControl
