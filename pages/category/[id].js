import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import subCategoryData from '../../data/subCategoryData';
import PorductList from '../../components/productlist/PorductList';
// import products from '../../data/productsData';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductsByCategoryAction from '../../store/actions/products/getProductsByCategoryAction';
import Loading from '../../components/core/loading/Loading';

const category = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { products, loading, error } = useSelector(state => state.productList);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductsByCategoryAction(id, 'category'));
		}
	}, [id]);

	return (
		<HomePage>
			{loading ? (
				<Loading />
			) : (
				<>
					<SubCategories links={[]} data={subCategoryData} to='/subcategory' />
					{!error && (
						<PorductList links={[]} data={products} to='/product' disableNav />
					)}
				</>
			)}
		</HomePage>
	);
};

export default category;
