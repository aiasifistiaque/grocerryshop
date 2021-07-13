import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
//import productData from '../../data/product';
import Prod from '../../components/product/Prod';
import Description from '../../components/product/description/Description';
import Return from '../../components/product/description/Return';
import Review from '../../components/product/description/Review';
import Related from '../../components/product/description/Related';
//import products from '../../data/productsData';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductAction from '../../store/actions/products/getProductAction';
import Loading from '../../components/core/loading/Loading';

const Product = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { product, loading, error } = useSelector(state => state.product);
	const { products } = useSelector(state => state.productList);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductAction(id));
		}
	}, [id]);
	return (
		<HomePage inv>
			{loading ? (
				<Loading />
			) : (
				<>
					<Prod productData={product} />
					<Description>{product.description}</Description>
					<Return />
					<Review />
					<Related items={products} product={product} />
					<br />
					<br />
					<br />
				</>
			)}
		</HomePage>
	);
};

export default Product;
