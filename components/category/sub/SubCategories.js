import React from 'react';
import styles from './SubCategories.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import Navigation from '../../navigation/Navigation';
import Link from 'next/link';

const SubCategories = ({ links, data, to }) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className={styles.scContainer}>
			<Navigation current={id} links={links} />

			<h2>{id}</h2>
			<div className={styles.cardContainer}>
				{data.map((item, i) => (
					<Link href={`${to}/${item.name}`} key={i}>
						<div className={styles.card}>
							<Image
								src={item.image}
								width={150}
								height={150}
								className={styles.image}
							/>
							<h3>{item.name}</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SubCategories;
