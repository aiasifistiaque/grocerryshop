import React from 'react';
import styles from './Prod.module.css';
import Image from 'next/image';
import { faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import useInCart from '../../hooks/useInCart';
import addToCartAction from '../../store/actions/cart/addToCartAction';
import removeFromCartAction from '../../store/actions/cart/removeFromCartAction';

const Prod = ({ productData }) => {
	const dispatch = useDispatch();
	const ifInCart = useInCart(productData._id);

	return (
		<div className={styles.productPage}>
			<Image src={productData.image} alt='product' height={300} width={300} />
			<div className={styles.details}>
				<h2>
					{productData.name} {productData.size}
				</h2>
				<di className={styles.review}>
					<FontAwesomeIcon icon={faStar} height={20} className={styles.icon} />
					<FontAwesomeIcon icon={faStar} height={20} className={styles.icon} />
					<FontAwesomeIcon icon={faStar} height={20} className={styles.icon} />
					<FontAwesomeIcon icon={faStar} height={20} className={styles.icon} />
					<FontAwesomeIcon icon={faStar} height={20} className={styles.icon} />
					<p>0 Reviews</p>
				</di>

				<p>{productData.size}</p>
				<p>Brand: {productData.brand}</p>
				<h3>Price: ৳ {productData.price}</h3>
				<div className={styles.inStock}>
					<FontAwesomeIcon
						icon={faCheckCircle}
						height={20}
						className={styles.icon}
					/>
					<p>In Stock</p>
				</div>
				{ifInCart.loading ? (
					<a onClick={() => {}}>Loading</a>
				) : !ifInCart.inCart ? (
					<a onClick={() => dispatch(addToCartAction(productData, 1))}>
						Add to Cart
					</a>
				) : (
					<div className={styles.qty}>
						<a
							className={styles.left}
							onClick={() => {
								if (ifInCart.item.qty > 1) {
									dispatch(addToCartAction(productData, ifInCart.item.qty - 1));
								} else {
									dispatch(removeFromCartAction(productData._id));
								}
							}}>
							-
						</a>
						<p>{ifInCart.item.qty}</p>
						<a
							className={styles.right}
							onClick={() =>
								dispatch(addToCartAction(productData, ifInCart.item.qty + 1))
							}>
							+
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Prod;
