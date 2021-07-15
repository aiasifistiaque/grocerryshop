import React, { useEffect, useState } from 'react';
import AdminPageMain from './AdminPageMain';
import { useDispatch, useSelector } from 'react-redux';
import getProductAction from '../../../store/actions/products/getProductAction';
import {
	DashItemContainer,
	DashboardContainer,
	DashEditContainer,
} from '../acomps';
import toTime from '../../../functions/toTime';
import { general } from '../../../constants';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import Image from 'next/image';
import FormButton from '../../core/buttons/FormButton';
import {
	startProductEditAction,
	editProductAction,
	cancelProductEditAction,
} from '../../../store/mix/editProduct';

const AdminProduct = ({ id }) => {
	const editProduct = useSelector(state => state.editProduct);
	const { edit } = editProduct;
	const dispatch = useDispatch();

	const { product, loading, error } = useSelector(state => state.product);
	useEffect(() => {
		if (id != undefined) dispatch(getProductAction(id));
	}, [id]);

	useEffect(() => {
		dispatch(cancelProductEditAction());
	}, []);

	const onEdit = () => {
		dispatch(startProductEditAction());
	};

	if (loading || error) return null;

	return (
		<AdminPageMain>
			<h3>Product</h3>
			<br />
			<DashItemContainer title='Image'>
				<Image
					src={product.image}
					height={200}
					width={200}
					unoptimized={true}
				/>
			</DashItemContainer>
			<br />

			{edit ? (
				<EditProduct product={product} />
			) : (
				<>
					<FormButton rounded onClick={onEdit}>
						Edit Product
					</FormButton>
					<br />

					<DashboardContainer>
						<DashItemContainer title='Id'>{product._id}</DashItemContainer>
						<DashItemContainer title='Status'>
							{product.status}
						</DashItemContainer>

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

						<DashItemContainer title='Rating'>
							{product.rating}
						</DashItemContainer>
						<DashItemContainer title='Size'>{product.size}</DashItemContainer>
						<DashItemContainer title='Wishlisted'>
							{product.wishlisted}
						</DashItemContainer>

						<DashItemContainer title='Price'>{`${general.takaSymbol} ${product.price}`}</DashItemContainer>
					</DashboardContainer>
				</>
			)}
			<br />
		</AdminPageMain>
	);
};

const EditProduct = ({ product }) => {
	const dispatch = useDispatch();
	const { edit, loading } = useSelector(state => state.editProduct);

	const [name, setName] = useState(product.name);
	const [status, setStatus] = useState(product.status);
	const [size, setSize] = useState(product.size);
	const [category, setCategory] = useState(product.category);
	const [subCategory, setSubCategory] = useState(product.subCategory);
	const [tag, setTAg] = useState(product.tag);
	const [description, setDescription] = useState(product.description);
	const [note, setNote] = useState(product.note);
	const [stock, setStock] = useState(product.countInStock);
	const [price, setPrice] = useState(product.price);

	const buttonText = loading ? 'Processing' : 'Save Changes';

	const onUpdate = () => {
		if (!loading) {
			dispatch(
				editProductAction({
					_id: product._id,
					name,
					size,
					description,
					category,
					subCategory,
					note,
					stock,
					price,
					status,
					tag,
				})
			);
		}
	};

	return (
		<>
			<FormButton rounded onClick={onUpdate}>
				{buttonText}
			</FormButton>
			<br />

			<DashboardContainer>
				<DashItemContainer title='Id'>{product._id}</DashItemContainer>
				<DashEditContainer title='Status' setValue={e => setStatus(e)}>
					{status}
				</DashEditContainer>

				<DashEditContainer title='Name' setValue={e => setName(e)}>
					{name}
				</DashEditContainer>
				<DashEditContainer title='Category' setValue={e => setCategory(e)}>
					{category}
				</DashEditContainer>
				<DashEditContainer
					title='Sub Category'
					setValue={e => setSubCategory(e)}>
					{subCategory}
				</DashEditContainer>
				<DashEditContainer title='Tag' setValue={e => setTAg(e)}>
					{tag}
				</DashEditContainer>
				<DashEditContainer
					title='Description'
					setValue={e => setDescription(e)}>
					{description}
				</DashEditContainer>
				<DashEditContainer title='Note' setValue={e => setNote(e)}>
					{note}
				</DashEditContainer>
				<DashEditContainer title='Stock' setValue={e => setStock(e)}>
					{stock}
				</DashEditContainer>
				<DashItemContainer title='Created'>
					{toTime(product.createdAt)}
				</DashItemContainer>

				<DashEditContainer title='Size' setValue={e => setSize(e)}>
					{size}
				</DashEditContainer>

				<DashEditContainer
					title='Price'
					setValue={e => setPrice(e)}>{`${price}`}</DashEditContainer>
			</DashboardContainer>
		</>
	);
};

export default AdminProduct;
