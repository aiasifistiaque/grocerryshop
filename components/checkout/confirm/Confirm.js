import React, { useEffect } from 'react';
import styles from './Confirm.module.scss';
import OrderSummaryMock from '../shipping/OrderSummaryMock';
import { useSelector, useDispatch } from 'react-redux';
import TextButton from '../../core/buttons/TextButton';
import useCart from '../../../hooks/useCart';
import { general } from '../../../constants';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import { useRouter } from 'next/dist/client/router';
import createOrderAction from '../../../store/actions/orders/createOrderAction';

const Confirm = () => {
	const { address } = useSelector(state => state.address);
	const { success, loading, order } = useSelector(state => state.order);
	const { total, count } = useCart();
	const router = useRouter();
	const dispatch = useDispatch();
	const confirmOrder = () => {
		!loading && dispatch(createOrderAction(address));
	};
	useEffect(() => {
		if (success) {
			router.replace(`/order/${order._id}?status=neworder`);
		}
	}, [success]);
	return (
		<div className={styles.confirmPage}>
			<div className={styles.confirmContainer}>
				<h3>Order Info</h3>
				<div className={styles.cardContainer}>
					<InfoCard title='Items'>{count}</InfoCard>
					<hr />
					<InfoCard title='Subtotal'>৳ {total}</InfoCard>
					<InfoCard title='VAT'>৳ {general.vat}</InfoCard>
					<InfoCard title='Shipping'>৳ {general.vat}</InfoCard>
					<hr />
					<InfoCard title='Total'>
						৳ {total + general.vat + general.vat}
					</InfoCard>
				</div>
				<br />
				<h3>Shipping Info</h3>
				<div className={styles.cardContainer}>
					<Card title='Name'>{address.name}</Card>
					<Card title='Address'>
						{`${address.address}, ${address.city} ${address.postalCode}`}
					</Card>
					<Card title='Phone'>{address.phone}</Card>
					<TextButton
						onClick={() => router.push('/checkout/shipping?status=edit')}>
						Edit Shipping Info
					</TextButton>
				</div>
				<br />
				<h3>Payment Info</h3>
				<div className={styles.cardContainer}>
					<Card title='Payment'>Cash on Delivery</Card>
				</div>
				<div className={styles.submit}>
					<ButtonPrimary rounded onClick={confirmOrder}>
						{loading ? 'loading' : 'Confirm Order'}
					</ButtonPrimary>
				</div>
			</div>
			<OrderSummaryMock />
		</div>
	);
};

const Card = ({ title, children }) => {
	return (
		<div className={styles.card}>
			<h4>{title}:</h4>
			<p>{children}</p>
		</div>
	);
};

const InfoCard = ({ title, children }) => {
	return (
		<div className={styles.infoCard}>
			<h4>{title}:</h4>
			<p>{children}</p>
		</div>
	);
};

export default Confirm;
