import React from 'react';
import styles from './ProductList.module.css';
import Navigation from '../navigation/Navigation';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';

const PorductList = ({ links, data, to }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className={styles.plContainer}>
			<Navigation current={id} links={links} />
			<h2>{id}</h2>
			<div className={styles.cardContainer}>
				{data.map((item, i) => (
					<div className={styles.card} key={i}>
						<Link href={`${to}/${item.name}`}>
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
