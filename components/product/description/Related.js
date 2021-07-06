import React from 'react';
import styles from './Description.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Related = ({ items }) => {
	return (
		<div className={styles.description}>
			<h2>Related Products</h2>
			<div className={styles.cardContainer}>
				{items.map(
					(item, i) =>
						i < 4 && (
							<Link href={`/product/${item._id}`} key={i}>
								<div className={styles.card}>
									<Image
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
						)
				)}
			</div>
		</div>
	);
};

export default Related;
