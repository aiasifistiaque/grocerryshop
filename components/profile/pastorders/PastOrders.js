import React, { useEffect } from 'react';
import styles from './PastOrders.module.css';
import Menu from '../menu/Menu';
import { useSelector, useDispatch } from 'react-redux';
import userOrderAction from '../../../store/actions/orders/userOrderAction';
import { general } from '../../../constants';
import toTime from '../../../functions/toTime';
import Link from 'next/link';

const PastOrders = ({ id }) => {
	const dispatch = useDispatch();
	const { orders, loading, success, count, error } = useSelector(
		state => state.orderList
	);
	useEffect(() => {
		dispatch(userOrderAction('CURRENT'));
	}, []);
	return (
		<div className={styles.ppContainer}>
			<Menu id={id} />

			<div className={styles.orderContainer}>
				<h3>My Orders</h3>
				<Headers />
				<hr />
				{loading ? (
					<Loading />
				) : error ? (
					<Error />
				) : orders.length < 1 ? (
					<NoOrders />
				) : (
					<MyOrders orders={orders} />
				)}
			</div>
		</div>
	);
};

const Headers = () => {
	return (
		<div className={styles.orderCard}>
			<h4>Date</h4>
			<h4>Amount</h4>
			<h4>Status</h4>
			<h4 className={styles.details}>Details</h4>
		</div>
	);
};

const MyOrders = ({ orders }) => {
	return (
		<>
			{orders.map(order => (
				<div className={styles.orderCard} key={order._id}>
					<p className={styles.date}>{toTime(order.createdAt)}</p>
					<p>
						{general.takaSymbol} {order.totalPrice}
					</p>
					<p>{order.status}</p>
					<Link href={`/order/${order._id}`}>
						<a className={styles.details}>Details</a>
					</Link>
				</div>
			))}
		</>
	);
};

const NoOrders = () => {
	return (
		<div className={styles.noOrders}>
			<h4>No Current Orders</h4>
		</div>
	);
};

const Loading = () => {
	return (
		<div className={styles.noOrders}>
			<h4>Loading...</h4>
		</div>
	);
};

const Error = () => {
	return (
		<div className={styles.noOrders}>
			<h4>There was an error, please reload</h4>
		</div>
	);
};

export default PastOrders;
