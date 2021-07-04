import React from 'react';
import styles from './Categories.module.scss';
import categoryData from '../../../data/categoryData';
import Image from 'next/image';

const Categories = () => {
	return (
		<div className={styles.categoryContainer}>
			<h1>Our Product Categories</h1>
			<div className={styles.cardContainer}>
				{categoryData.map(item => (
					<div className={styles.card}>
						<Image
							src={item.image}
							width={150}
							height={150}
							className={styles.image}
						/>
						<h3>{item.name}</h3>
						<p>500 items</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
