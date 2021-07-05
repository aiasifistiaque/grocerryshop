import React from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import productData from '../../data/product';
import Prod from '../../components/product/Prod';
import Description from '../../components/product/description/Description';
import Return from '../../components/product/description/Return';
import Review from '../../components/product/description/Review';
import Related from '../../components/product/description/Related';
import products from '../../data/productsData';

const product = () => {
	return (
		<HomePage inv>
			<Prod />
			<Description>{productData.description}</Description>
			<Return terms={productData.terms} />
			<Review />
			<Related items={products} />
			<br />
			<br />
			<br />
		</HomePage>
	);
};

export default product;
