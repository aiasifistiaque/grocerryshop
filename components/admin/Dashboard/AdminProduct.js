import React, { useEffect } from 'react';
import AdminPageMain from './AdminPageMain';
import { useDispatch, useSelector } from 'react-redux';
import getProductAction from '../../../store/actions/products/getProductAction';
import { DashItemContainer, DashboardContainer } from '../acomps';
import toTime from '../../../functions/toTime';
import { general } from '../../../constants';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import Image from 'next/image';

const AdminProduct = ({ id }) => {
	const dispatch = useDispatch();
	const { product, loading, error } = useSelector(state => state.product);
	useEffect(() => {
		if (id != undefined) dispatch(getProductAction(id));
	}, [id]);
	if (loading || error) return null;
	return (
		<AdminPageMain>
			<h3>Product</h3>
			<br />
			<br />
			<DashItemContainer title='Image'>
				<Image src={product.image} height={200} width={200} />
			</DashItemContainer>

			<DashboardContainer>
				<DashItemContainer title='Id'>{product._id}</DashItemContainer>
				<DashItemContainer title='Status'>{product.status}</DashItemContainer>

				<DashItemContainer title='Name'>{product.name}</DashItemContainer>
				<DashItemContainer title='Category'>
					{product.category}
				</DashItemContainer>
				<DashItemContainer title='Sub Category'>
					{product.subCategory}
				</DashItemContainer>
				<DashItemContainer title='Tag'>{product.tag}</DashItemContainer>
				<DashItemContainer title='Description'>
					{product.description}
				</DashItemContainer>
				<DashItemContainer title='Note'>{product.note}</DashItemContainer>
				<DashItemContainer title='Stock'>
					{product.countInStock}
				</DashItemContainer>
				<DashItemContainer title='Created'>
					{toTime(product.createdAt)}
				</DashItemContainer>
				<DashItemContainer title='Last Updated'>
					{toTime(product.updatedAt)}
				</DashItemContainer>

				<DashItemContainer title='Rating'>{product.rating}</DashItemContainer>
				<DashItemContainer title='Size'>{product.size}</DashItemContainer>
				<DashItemContainer title='Wishlisted'>
					{product.wishlisted}
				</DashItemContainer>

				<DashItemContainer title='Price'>{`${general.takaSymbol} ${product.price}`}</DashItemContainer>
			</DashboardContainer>
			<br />
			<ButtonPrimary rounded>Edit</ButtonPrimary>
		</AdminPageMain>
	);
};

export default AdminProduct;
