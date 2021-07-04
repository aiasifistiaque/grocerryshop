import React from 'react';
import {
	faTruck,
	faMoneyBillWave,
	faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Banner.module.css';
import { icon } from '@fortawesome/fontawesome-svg-core';

const banner = [
	{
		icon: faTruck,
		title: 'Free Shipping',
		details: 'Free Shipping all over Dhaka city',
	},
	{
		icon: faMoneyBillWave,
		title: 'Payment Methods',
		details: 'Cash on Delivery, Bkash',
	},
	{
		icon: faHandsHelping,
		title: 'Help Center',
		details: '24/7 Customer Care Support',
	},
];

const Banner = () => {
	return (
		<div className={styles.bannerContainer}>
			{banner.map((item, i) => (
				<div className={styles.bannerItem} key={i}>
					<FontAwesomeIcon icon={item.icon} className={styles.icon} />
					<div className={styles.textContainer}>
						<h3>{item.title}</h3>
						<p>{item.details}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Banner;
