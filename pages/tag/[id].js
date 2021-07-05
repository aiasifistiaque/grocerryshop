import React from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import PorductList from '../../components/productlist/PorductList';
import products from '../../data/productsData';

const tag = () => {
	return (
		<HomePage>
			<PorductList
				links={[
					{
						name: products[0].category,
						to: `/category/${products[0].category}`,
					},
					{
						name: products[0].subCategory,
						to: `/subcategory/${products[0].subCategory}`,
					},
				]}
				data={products}
				to='/product'
			/>
		</HomePage>
	);
};

export default tag;
