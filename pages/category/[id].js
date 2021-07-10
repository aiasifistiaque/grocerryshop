import React, { useEffect, useState } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import subCategoryData from '../../data/subCategoryData';
import PorductList from '../../components/productlist/PorductList';
// import products from '../../data/productsData';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import getProductsByCategoryAction from '../../store/actions/products/getProductsByCategoryAction';
import Loading from '../../components/core/loading/Loading';

const Category = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { products, loading, error } = useSelector(state => state.productList);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductsByCategoryAction(id, 'category', page));
		}
	}, [id, page]);

	const onLoadMore = () => {
		setPage(page + 1);
	};

	return (
		<HomePage>
			{loading && page < 1 ? (
				<Loading />
			) : (
				<>
					<SubCategories links={[]} data={subCategoryData} to='/subcategory' />
					{!error && (
						<PorductList
							links={[]}
							data={products}
							to='/product'
							onLoadMore={onLoadMore}
							disableNav
						/>
					)}
				</>
			)}
		</HomePage>
	);
};

export default Category;
