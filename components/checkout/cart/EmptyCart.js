import React from 'react';
import LongButton from '../../core/buttons/LongButton';
import styles from './CartOne.module.css';
import { useRouter } from 'next/dist/client/router';

const EmptyCart = () => {
	const router = useRouter();
	return (
		<div className={styles.empty}>
			<p>Cart is empty</p>
			<br />
			<LongButton onClick={() => router.replace('/')}>
				Continue Shopping
			</LongButton>
		</div>
	);
};

export default EmptyCart;
