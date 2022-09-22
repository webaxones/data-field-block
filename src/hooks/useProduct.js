import { useEffect, useState } from '@wordpress/element'
import apiFetch from '@wordpress/api-fetch'

const useProduct = ( { postId, postType } ) => {
	const [ productData, setProductData ] = useState( {} )
	const [ isLoadingProduct, setIsLoadingProduct ] = useState( false )

	if ( 'product' !== postType ) {
		return {}		
	}

	let unmounted = false

	useEffect( () => {
		setIsLoadingProduct( true )
		apiFetch( { path: `wc/v3/products/${ postId }` } )
		.then( res => {
			if ( ! unmounted ) {
				setProductData( res )
				setIsLoadingProduct( false )
			}
		} ).catch( ( error ) => {
			if ( ! unmounted ) {
			  console.log( 'error ', error )
			  setIsLoadingProduct( false )
			}
		} )
	}, [ postId, postType ] )
	return {
		productData: productData,
		isLoadingProduct: isLoadingProduct,
	}
}
export default useProduct
