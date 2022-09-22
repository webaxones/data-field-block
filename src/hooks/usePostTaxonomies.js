import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'

const usePostTaxonomies = ( { postType } ) => {
	return useSelect( select => {
			const { getTaxonomies, isResolving } = select( coreDataStore )
			const taxonomiesArgs = [
				{
					type: postType,
					per_page: -1,
					context: 'view',
				},
			]
			const taxonomies = getTaxonomies( ...taxonomiesArgs )

			return {
				postTaxonomies: taxonomies,
				isLoadingTaxonomies: isResolving( 'getTaxonomies', taxonomiesArgs ),
				hasPostTaxonomies: !! taxonomies?.length,
			}
		},
		[ postType ]
	)
}

export default usePostTaxonomies
