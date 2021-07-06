import React from 'react';
import styles from './ProductList.module.css';
import Navigation from '../navigation/Navigation';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';

const PorductList = ({ links, data, to, disableNav }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className={styles.plContainer}>
			{!disableNav && <Navigation current={id} links={links} />}
			<h2>{id} Items</h2>
			<div className={styles.cardContainer}>
				{data.map((item, i) => (
					<div className={styles.card} key={item._id}>
						<Link href={`${to}/${item._id}`}>
							<div className={styles.prod}>
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

						<a>Add to Cart</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PorductList;
