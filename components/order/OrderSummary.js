import React from 'react';
import { general } from '../../constants';
import styles from './OrderComponent.module.css';

const OrderSummary = ({ order }) => {
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
				<SingleCard title='Order Status'>{order.status}</SingleCard>
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

export default OrderSummary;
