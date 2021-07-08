import React from 'react';
import useCart from '../../../hooks/useCart';
import styles from './Shipping.module.scss';

const OrderSummaryMock = ({ items }) => {
	const { total, count } = useCart();

	return (
		<div className={styles.summary}>
			<div className={styles.summaryHeader}>
				<h3>Summary</h3>
				<p className={styles.totalItems}>{count} items</p>
			</div>
			<Card>
				<h6>Product</h6>
				<h6>Total</h6>
			</Card>
			<span />
			{items.map(item => (
				<Card key={item._id}>
					<h4>
						{item.name} x {item.qty}
					</h4>
					<h4>৳ {item.totalPrice}</h4>
				</Card>
			))}
			<span />
			<Card>
				<h5>Subtotal</h5>
				<h5>৳ {total}</h5>
			</Card>
			<Card>
				<h5>VAT</h5>
				<h5>৳ 0</h5>
			</Card>
			<Card>
				<h5>Delivery Charge</h5>
				<h5>৳ 0</h5>
			</Card>
			<span />
			<Card>
				<h3>Total</h3>
				<h3>৳ {total}</h3>
			</Card>
		</div>
	);
};

const Card = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export default OrderSummaryMock;
