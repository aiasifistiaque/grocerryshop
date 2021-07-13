import React, { useState } from 'react';
import { general } from '../../../constants';
import styles from './OrderComponent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderStatusValue } from '../../../store/mix/editOrderStatus';

const OrderSummary = ({ order }) => {
	const dispatch = useDispatch();
	const { edit, values } = useSelector(state => state.editOrderStatus);

	return (
		<div className={styles.cardContainer}>
			<TwoCards>
				<SingleCard title='Order Id'>{order._id}</SingleCard>
				<SingleCard title='Customer'>{order.user.name}</SingleCard>
				<SingleCard title='Email'>{order.user.email}</SingleCard>
				<SingleCard title='Phone'>{order.shippingAddress.phone}</SingleCard>
				<SingleCard title='Address'>
					{`${order.shippingAddress.address}, ${order.shippingAddress.city} ${order.shippingAddress.postalCode}`}
				</SingleCard>
			</TwoCards>
			<TwoCards>
				<SingleCard title='Date'>{order.createdAt}</SingleCard>
				{!edit ? (
					<SingleCard title='Order Status'>{order.status}</SingleCard>
				) : (
					<SingleSelectEditCard
						title='Order Status'
						data={values}
						value={order.status}
						setValue={e => {
							dispatch(setOrderStatusValue(e));
						}}>
						Edit
					</SingleSelectEditCard>
				)}
				<SingleCard title='Total'>
					{general.takaSymbol} {order.totalPrice}
				</SingleCard>
				<SingleCard title='Payment Method'>Cash on delivery</SingleCard>
			</TwoCards>
		</div>
	);
};

const TwoCards = ({ children }) => {
	return <div className={styles.doubleCard}>{children}</div>;
};

const SingleCard = ({ title, children }) => {
	return (
		<div className={styles.singleCard}>
			<h4>{title}:</h4>
			<p>{children}</p>
		</div>
	);
};

const SingleSelectEditCard = ({ title, value, data, setValue }) => {
	const [thisValue, setThisValue] = useState(value);
	return (
		<div className={styles.singleCard} style={{ alignItems: 'center' }}>
			<h4>{title}:</h4>
			<select
				className={styles.select}
				value={thisValue}
				onChange={e => {
					setThisValue(e.target.value);
					setValue(e.target.value);
				}}>
				{data.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default OrderSummary;
