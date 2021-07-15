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

			<h2>Sub Categories {`(${id})`}</h2>
			<div className={styles.cardContainer}>
				{data.map((item, i) => (
					<Link href={`${to}/${item.name}`} key={i}>
						<div className={styles.card}>
							<div className={styles.imageContainer}>
								<Image
									unoptimized={true}
									alt={item.name}
									src={item.image}
									width={100}
									height={100}
									className={styles.image}
								/>
							</div>

							<h4>{item.name}</h4>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SubCategories;
