import React from 'react';
import styles from './OrderComponent.module.css';
import { useSelector } from 'react-redux';
import isEmpty from '../../functions/isEmpty';
import Loading from '../core/loading/Loading';
import OrderSummary from './OrderSummary';
import Image from 'next/image';
import { general } from '../../constants';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const OrderComponent = ({ status }) => {
	const { order, loading, error } = useSelector(state => state.order);
	if (loading) return <Loading />;
	if (error) return null;
	if (isEmpty(order)) return null;

	return (
		<div className={styles.ocContainer}>
			{status == 'neworder' && (
				<div className={styles.orderPlaced}>
					<h2>Your Order has been placed successfully</h2>
				</div>
			)}

			<div className={styles.orderContainer}>
				<h2>Order Summary</h2>
				<OrderSummary order={order} />
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
							unoptimized={true}
							src={item.image}
							alt={item.name}
							height={50}
							width={50}
							className={styles.image}
						/>
						<Link href={`/product/${item._id}`}>
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

export default OrderComponent;
