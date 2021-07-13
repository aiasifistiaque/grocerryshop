import React, { useState } from 'react';
import styles from './OrderComponent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from '../../../functions/isEmpty';
import Loading from '../../core/loading/Loading';
import OrderSummary from './OrderSummary';
import Image from 'next/image';
import { general } from '../../../constants';
import Link from 'next/link';
import FormButton from '../../core/buttons/FormButton';

import editOrderAction, {
	startOrderStatusEdit,
	cancelOrderStatusEdit,
	setOrderStatusValue,
} from '../../../store/mix/editOrderStatus';

const AdminOrderComponent = () => {
	const dispatch = useDispatch();
	const { order, loading, error } = useSelector(state => state.order);
	const editOrder = useSelector(state => state.editOrderStatus);

	const { edit } = editOrder;

	const buttonText = editOrder.loading
		? 'Processing...'
		: edit
		? 'Save Changes'
		: 'Edit Status';

	const onEdit = () => {
		if (!edit) {
			dispatch(startOrderStatusEdit());
			dispatch(setOrderStatusValue(order.status));
		} else {
			if (!editOrder.loading) {
				dispatch(editOrderAction(order));
			}
		}
	};

	if (loading) return <Loading />;

	if (error) return null;
	if (isEmpty(order)) return null;

	return (
		<div className={styles.ocContainer}>
			<div className={styles.orderContainer}>
				<h2>Order Summary</h2>
				<OrderSummary order={order} edit={edit} />
				<FormButton rounded onClick={onEdit}>
					{buttonText}
				</FormButton>
			</div>

			<div className={styles.itemCardContainer}>
				<h2>Order Items</h2>
				<OrderItemsHeaders />

				<hr />
				<OrderItems items={order.orderItems} />
			</div>
		</div>
	);
};

const OrderItemsHeaders = () => {
	return (
		<div className={styles.itemCard}>
			<h5 className={styles.imageContainer}>Product</h5>
			<h5>Unit Price</h5>
			<h5>Total Price</h5>
		</div>
	);
};

const OrderItems = ({ items }) => {
	return (
		<>
			{items.map(item => (
				<div className={styles.itemCard} key={item._id}>
					<div className={styles.imageContainer}>
						<Image
							src={item.image}
							alt={item.name}
							height={50}
							width={50}
							className={styles.image}
						/>
						<Link href={`/admin/product?serial=${item._id}`}>
							<a>
								<h4>{item.name}</h4>
							</a>
						</Link>
					</div>

					<p>
						{general.takaSymbol} {item.price} x {item.qty}
					</p>
					<p>
						{general.takaSymbol} {item.price * item.qty}
					</p>
				</div>
			))}
		</>
	);
};

export default AdminOrderComponent;
