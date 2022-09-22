import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import './style.scss'
import edit from './edit'
import metadata from './block.json'

registerBlockType(metadata.name, {
	edit
} )
