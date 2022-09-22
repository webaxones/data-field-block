import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

const HTMLTagControl = ( { selected, onChange, fieldType } ) => {

	let htmlTagsOptions = []
	if ( 'meta' === fieldType || 'attribute' === fieldType ) {
		htmlTagsOptions = [
			{ name: __( '<div>', 'datafieldblock' ), slug: 'div' },
			{ name: __( '<span>', 'datafieldblock' ), slug: 'span' },
			{ name: __( '<p>', 'datafieldblock' ), slug: 'p' },
			{ name: __( '<h1>', 'datafieldblock' ), slug: 'h1' },
			{ name: __( '<h2>', 'datafieldblock' ), slug: 'h2' },
			{ name: __( '<h3>', 'datafieldblock' ), slug: 'h3' },
			{ name: __( '<h4>', 'datafieldblock' ), slug: 'h4' },
			{ name: __( '<h5>', 'datafieldblock' ), slug: 'h5' },
			{ name: __( '<h6>', 'datafieldblock' ), slug: 'h6' },
		]
	}

	if ( 'taxonomy' === fieldType ) {
		htmlTagsOptions = [
			{ name: __( '<span>', 'datafieldblock' ), slug: 'span' },
			{ name: __( '<p>', 'datafieldblock' ), slug: 'p' },
			{ name: __( '<a>', 'datafieldblock' ), slug: 'a' },
			{ name: __( '<h1>', 'datafieldblock' ), slug: 'h1' },
			{ name: __( '<h2>', 'datafieldblock' ), slug: 'h2' },
			{ name: __( '<h3>', 'datafieldblock' ), slug: 'h3' },
			{ name: __( '<h4>', 'datafieldblock' ), slug: 'h4' },
			{ name: __( '<h5>', 'datafieldblock' ), slug: 'h5' },
			{ name: __( '<h6>', 'datafieldblock' ), slug: 'h6' },
			{ name: __( '<span><a>', 'datafieldblock' ), slug: 'span>a' },
			{ name: __( '<p><a>', 'datafieldblock' ), slug: 'p>a' },
			{ name: __( '<h1><a>', 'datafieldblock' ), slug: 'h1>a' },
			{ name: __( '<h2><a>', 'datafieldblock' ), slug: 'h2>a' },
			{ name: __( '<h3><a>', 'datafieldblock' ), slug: 'h3>a' },
			{ name: __( '<h4><a>', 'datafieldblock' ), slug: 'h4>a' },
			{ name: __( '<h5><a>', 'datafieldblock' ), slug: 'h5>a' },
			{ name: __( '<h6><a>', 'datafieldblock' ), slug: 'h6>a' },
		]
	}

	return (
		<SelectControl
			label={ __( 'HTML tag', 'datafieldblock' ) }
			value={ selected }
			options={ [
				...htmlTagsOptions.map( ( { name, slug } ) => ( {
					label: name,
					value: slug,
				} ) ),
			] }
			help={ __( 'HTML tag to use for the element', 'datafieldblock' ) }
			onChange={ onChange }
		/>
	)
}

export default HTMLTagControl
