import React from 'react';
import styles from './CartOne.module.css';
import LongButton from '../../core/buttons/LongButton';
import Image from 'next/image';
import { general } from '../../../constants';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import addToCartAction from '../../../store/actions/cart/addToCartAction';
import removeFromCartAction from '../../../store/actions/cart/removeFromCartAction';
import { useDispatch } from 'react-redux';
import useCart from '../../../hooks/useCart';

const CartOne = ({ items }) => {
	const { total, count } = useCart();
	return (
		<div className={styles.cartOneContainer}>
			<h2>Your Cart</h2>

			{count == 0 ? (
				<EmptyCart />
			) : (
				<div className={styles.cardContainer}>
					{items.map((item, i) => (
						<Item item={item} key={i} />
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

const Item = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image src={item.image} height={100} width={100} objectFit='cover' />
			</div>

			<h3>{item.name}</h3>
			<div style={{ flex: 1 }}>
				<div className={styles.qty}>
					<a
						className={styles.left}
						onClick={() => {
							if (item.qty > 1) {
								dispatch(addToCartAction(item, item.qty - 1));
							}
						}}>
						-
					</a>
					<p>{item.qty}</p>
					<a
						className={styles.right}
						onClick={() => {
							dispatch(addToCartAction(item, item.qty + 1));
						}}>
						+
					</a>
				</div>
			</div>

			<p>
				{general.takaSymbol} {item.totalPrice}
			</p>
			<FontAwesomeIcon
				icon={faTrash}
				height={20}
				className={styles.icon}
				onClick={() => dispatch(removeFromCartAction(item._id))}
			/>
		</div>
	);
};

const EmptyCart = () => {
	return (
		<div className={styles.empty}>
			<p>Cart is empty</p>
			<br />
			<LongButton>Continue Shopping</LongButton>
		</div>
	);
};

export default CartOne;
