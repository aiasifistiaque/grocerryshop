import React from 'react';
import styles from './Payment.module.scss';
import OrderSummaryMock from '../shipping/OrderSummaryMock';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import { useRouter } from 'next/dist/client/router';

const Payment = () => {
	const router = useRouter();
	return (
		<div className={styles.paymentPage}>
			<div className={styles.paymentOption}>
				<h2>Payment Option</h2>
				<p>
					Dear Customer, <br /> Currently we only accept cash on delivery. We
					hope to bring more payment options soon. <br />
					Thank You.
				</p>
				<div className={styles.submit}>
					<ButtonPrimary
						rounded
						onClick={() => router.push('/checkout/confirmation')}>
						Proceed
					</ButtonPrimary>
				</div>
			</div>

			<OrderSummaryMock />
		</div>
	);
};

export default Payment;
