import React from 'react';
import styles from './Prod.module.css';
import Image from 'next/image';
import productData from '../../data/product';
import { faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Prod = () => {
	return (
		<div className={styles.productPage}>
			<Image src={productData.image} height={300} width={300} />
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
				<a>Add to Cart</a>
			</div>
		</div>
	);
};

export default Prod;
