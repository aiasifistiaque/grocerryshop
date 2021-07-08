import React from 'react';
import styles from './CartOne.module.css';
import LongButton from '../../core/buttons/LongButton';
import { general } from '../../../constants';
import useCart from '../../../hooks/useCart';
import { useRouter } from 'next/dist/client/router';
import CartPageItem from './CartPageItem';
import EmptyCart from './EmptyCart';

const CartOne = ({ items }) => {
	const { total, count } = useCart();
	const router = useRouter();

	const toShipping = () => {
		router.push('/checkout/shipping');
	};

	return (
		<div className={styles.cartOneContainer}>
			<div className={styles.cartHeader}>
				<h2>My Cart</h2>

				<LongButton onClick={toShipping}>Checkout</LongButton>
			</div>

			{count == 0 ? (
				<EmptyCart />
			) : (
				<div className={styles.cardContainer}>
					<div
						className={styles.card}
						style={{ borderBottom: '2px solid whitesmoke' }}>
						<h2 style={{ flex: 2 }}>Product</h2>
						<h2 style={{ flex: 1 }}>Quantity</h2>
						<h2 style={{ flex: 1 }}>Price</h2>
						<h2>del</h2>
					</div>

					{items.map((item, i) => (
						<CartPageItem item={item} key={i} />
					))}
					<hr />
					<div className={styles.total}>
						<Totals title='Total Items'>{count}</Totals>
						<Totals title='Subtotal' tk>
							{total}
						</Totals>
						<Totals title='Tax' tk>
							0
						</Totals>
						<Totals title='Total' tk>
							{total}
						</Totals>
						<br />
						<LongButton>Proceed to Checkout</LongButton>
					</div>
				</div>
			)}
		</div>
	);
};

const Totals = ({ title, children, tk }) => {
	return (
		<div className={styles.totalItem}>
			<span>{title}: </span>
			<p>
				{tk && general.takaSymbol + ' '}
				{children}
			</p>
		</div>
	);
};

export default CartOne;
