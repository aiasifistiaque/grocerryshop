import React from 'react';
import Link from 'next/link';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import addToCartAction from '../../../store/actions/cart/addToCartAction';
import removeFromCartAction from '../../../store/actions/cart/removeFromCartAction';
import styles from './CartOne.module.css';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { general } from '../../../constants';

const CartPageItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<div className={styles.img}>
					<Image src={item.image} height={100} width={100} objectFit='cover' />
				</div>
				<Link href={`/product/${item._id}`}>
					<a>{item.name}</a>
				</Link>
			</div>

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

export default CartPageItem;
