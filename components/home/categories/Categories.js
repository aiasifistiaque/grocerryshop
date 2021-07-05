import React from 'react';
import styles from './Categories.module.scss';
import categoryData from '../../../data/categoryData';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
	return (
		<div className={styles.categoryContainer}>
			<h1>Our Product Categories</h1>

			<div className={styles.cardContainer}>
				{categoryData.map(item => (
					<Link href={`/category/${item.name}`} key={item.id}>
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
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
