import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'

const usePostTerms = ( { postId, term, counter } ) => {
	return useSelect( select => {
			const { slug } = term
			const { getEntityRecords, isResolving } = select( coreDataStore )
			const howMany = 0 === counter ? -1 : counter
			const taxonomyArgs = [
				'taxonomy',
				slug,
				{
					post: postId,
					per_page: howMany,
					context: 'view',
				},
			]
			const terms = getEntityRecords( ...taxonomyArgs )
			return {
				postTerms: terms,
				isLoadingTerms: isResolving( 'getEntityRecords', taxonomyArgs ),
				hasPostTerms: !! terms?.length,
			}
		},
		[ postId, term, counter ]
	)
}

export default usePostTerms
