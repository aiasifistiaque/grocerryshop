import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import PorductList from '../../components/productlist/PorductList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductsByCategoryAction from '../../store/actions/products/getProductsByCategoryAction';
import Loading from '../../components/core/loading/Loading';

const Tag = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { products, loading, error } = useSelector(state => state.productList);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductsByCategoryAction(id, 'tag'));
		}
	}, [id]);
	return (
		<HomePage>
			<div style={{ paddingTop: '10vh' }} />
			{loading ? (
				<Loading />
			) : (
				!error &&
				products.length > 0 && (
					<PorductList
						links={[
							{
								name: products[0].category || '',
								to: `/category/${products[0].category || 'Food'}`,
							},
							{
								name: products[0].subCategory,
								to: `/subcategory/${products[0].subCategory}`,
							},
						]}
						data={products}
						to='/product'
					/>
				)
			)}
		</HomePage>
	);
};

export default Tag;
