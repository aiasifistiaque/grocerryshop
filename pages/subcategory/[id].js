import React, { useEffect, useState } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import tagData from '../../data/tagData';
import PorductList from '../../components/productlist/PorductList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductsByCategoryAction from '../../store/actions/products/getProductsByCategoryAction';
import Loading from '../../components/core/loading/Loading';

const Subcategories = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { products, loading, error } = useSelector(state => state.productList);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getProductsByCategoryAction(id, 'sub', page));
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
						<PorductList
							links={[]}
							data={products}
							to='/product'
							onLoadMore={onLoadMore}
							disableNav
						/>
					</>
				)
			)}
		</HomePage>
	);
};

export default Subcategories;
