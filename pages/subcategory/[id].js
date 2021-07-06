import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import tagData from '../../data/tagData';
import PorductList from '../../components/productlist/PorductList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductsByCategoryAction from '../../store/actions/products/getProductsByCategoryAction';
import Loading from '../../components/core/loading/Loading';

const subcategories = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { products, loading, error } = useSelector(state => state.productList);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductsByCategoryAction(id, 'sub'));
		}
	}, [id]);
	return (
		<HomePage>
			{loading ? (
				<Loading />
			) : (
				!error &&
				products.length > 0 && (
					<>
						<SubCategories
							data={tagData}
							to='/tag'
							links={[
								{
									name: products[0].category,
									to: `/category/${products[0].category || 'Food'}`,
								},
							]}
						/>
						<PorductList links={[]} data={products} to='/product' disableNav />
					</>
				)
			)}
		</HomePage>
	);
};

export default subcategories;
