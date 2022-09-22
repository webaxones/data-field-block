import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'

const selectTerm = term => {
		return useSelect( select => {
			if ( ! term ) return {}
			const { getTaxonomy } = select( coreDataStore )
			const taxonomy = getTaxonomy( term )
		
			return taxonomy?.visibility?.publicly_queryable ? taxonomy : {}
		},
		[ term ]
	)
}

export default selectTerm
