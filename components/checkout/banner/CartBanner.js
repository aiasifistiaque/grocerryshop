import React from 'react';
import styles from './CartBanner.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faShoppingCart,
	faTruck,
	faCreditCard,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

const items = [
	{
		title: 'My Cart',
		icon: faShoppingCart,
		select: 'cart',
	},
	{
		title: 'Shipping',
		icon: faTruck,
		select: 'shipping',
	},
	{
		title: 'Payment',
		icon: faCreditCard,
		select: 'payment',
	},
	{
		title: 'Confirmation',
		icon: faCheck,
		select: 'confirmation',
	},
];

const CartBanner = ({ select }) => {
	return (
		<div className={styles.cartBanner}>
			{items.map((item, i) => (
				<Item
					title={item.title}
					icon={item.icon}
					key={i}
					i={i + 1}
					select={select == item.select ? true : false}
				/>
			))}
		</div>
	);
};

const Item = ({ title, icon, i, select }) => {
	return (
		<div className={styles.bannerItem}>
			<FontAwesomeIcon
				icon={icon}
				className={select ? `${styles.icon} ${styles.select}` : styles.icon}
			/>
			<h3>{`${i}. ${title}`}</h3>
		</div>
	);
};

export default CartBanner;
