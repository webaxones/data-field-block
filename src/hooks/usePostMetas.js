import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'

const usePostMetas = ( { postType, postId } ) => {
	return useSelect( select => {
			const { getEntityRecord, isResolving } = select( coreDataStore )
			const { meta, acf } = getEntityRecord( 'postType', postType, postId )

			return {
				postMetas: meta,
				postACFs: acf,
				isLoadingMetas: isResolving( 'getEntityRecord', postType, postId ),
				hasPostMetas: !! meta?.length,
			}
		},
		[ postType, postId ]
	)
}

export default usePostMetas
