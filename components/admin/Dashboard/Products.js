import React, { useEffect, useState } from 'react';
import AdminPageMain from './AdminPageMain';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../../../store/actions/products/allProductsAction';
import { AdminListContainer, AdminListCard } from '../acomps';
import Image from 'next/image';
import { general } from '../../../constants';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import Link from 'next/link';

const Products = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(0);
	const { loading, products, end, error } = useSelector(
		state => state.productList
	);
	useEffect(() => {
		dispatch(getAllProductsAction('', page));
	}, [page]);

	if ((loading && page == 0) || error) return null;
	return (
		<AdminPageMain>
			<h3>Products</h3>
			<AdminListContainer>
				{products &&
					products &&
					products.map((product, i) => (
						<AdminListCard key={i}>
							<Image
								unoptimized={true}
								alt={product.name}
								src={product.image}
								height={100}
								width={100}
							/>

							<h5>{product.name}</h5>
							<p>
								{general.takaSymbol + ' '}
								{product.price}
							</p>
							<p>{product.category}</p>
							<p>Stock: {product.countInStock}</p>
							<Link href={`/admin/product?serial=${product._id}`}>
								<a>Details</a>
							</Link>
						</AdminListCard>
					))}
			</AdminListContainer>
			<ButtonPrimary
				rounded
				onClick={() => {
					!loading && setPage(page + 1);
				}}>
				{loading ? 'Loading...' : 'Load More'}
			</ButtonPrimary>
		</AdminPageMain>
	);
};

export default Products;
