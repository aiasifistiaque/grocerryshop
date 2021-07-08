import React from 'react';
import styles from './Shipping.module.scss';
import OrderSummaryMock from './OrderSummaryMock';
import TextInput from '../../core/inputs/textinput/TextInput';

const Shipping = ({ items }) => {
	return (
		<div className={styles.shippingPage}>
			<div className={styles.formContainer}>
				<h2>Shipping Address</h2>
				<div className={styles.form}>
					<TextInput label='Recipient Name' placeholder='Recipient Name' />
					<TextInput label='Recipient Phone' placeholder='Recipient Phone' />
					<TextInput label='Address' placeholder='Address' />
					<TextInput label='City' placeholder='City' />
					<TextInput label='Post Code' placeholder='Post Code' />
				</div>
			</div>
			<OrderSummaryMock items={items} />
		</div>
	);
};

export default Shipping;
