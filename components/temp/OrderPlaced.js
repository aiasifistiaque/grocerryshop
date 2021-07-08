import React from 'react';
import styles from './Temp.module.css';
import TextButton from '../core/buttons/TextButton';
import { useRouter } from 'next/dist/client/router';

const OrderPlaced = () => {
	const router = useRouter();
	return (
		<div className={styles.tempContainer}>
			<h2>Order Placed Successfully</h2>
			<br />
			<TextButton onClick={() => router.replace('/')}>Go Back Home</TextButton>
		</div>
	);
};

export default OrderPlaced;
