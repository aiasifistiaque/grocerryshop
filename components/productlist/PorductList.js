import React from 'react';
import styles from './ProductList.module.css';
import Navigation from '../navigation/Navigation';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import addToCartAction from '../../store/actions/cart/addToCartAction';
import useInCart from '../../hooks/useInCart';
import removeFromCartAction from '../../store/actions/cart/removeFromCartAction';

const PorductList = ({ links, data, to, disableNav }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className={styles.plContainer}>
			{!disableNav && <Navigation current={id} links={links} />}
			<h2>{id} Items</h2>
			<div className={styles.cardContainer}>
				{data.map((item, i) => (
					<ProductItem item={item} to={to} key={i} />
				))}
			</div>
		</div>
	);
};

const ProductItem = ({ item, to }) => {
	const dispatch = useDispatch();
	const ifInCart = useInCart(item._id);

	return (
		<div className={styles.card} key={item._id}>
			<Link href={`${to}/${item._id}`}>
				<div className={styles.prod}>
					<Image
						alt={item.name}
						src={item.image}
						width={150}
						height={150}
						className={styles.image}
					/>
					<h3>{item.name}</h3>

					<p>{item.size}</p>
					<h2>৳ {item.price}</h2>
				</div>
			</Link>
			{ifInCart.loading ? (
				<a onClick={() => {}}>Loading</a>
			) : !ifInCart.inCart ? (
				<a onClick={() => dispatch(addToCartAction(item, 1))}>Add to Cart</a>
			) : (
				<div className={styles.qty}>
					<a
						className={styles.left}
						onClick={() => {
							if (ifInCart.item.qty > 1) {
								dispatch(addToCartAction(item, ifInCart.item.qty - 1));
							} else {
								dispatch(removeFromCartAction(item._id));
							}
						}}>
						-
					</a>
					<p>{ifInCart.item.qty}</p>
					<a
						className={styles.right}
						onClick={() =>
							dispatch(addToCartAction(item, ifInCart.item.qty + 1))
						}>
						+
					</a>
				</div>
			)}
		</div>
	);
};

export default PorductList;
