import React, { useState, useEffect } from 'react';
import styles from './Shipping.module.scss';
import OrderSummaryMock from './OrderSummaryMock';
import TextInput from '../../core/inputs/textinput/TextInput';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import addAddressAction from '../../../store/actions/orders/addAddressAction';

const Shipping = ({ items }) => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [post, setPost] = useState('');
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const status = router.query.status;
	const addressState = useSelector(state => state.address);

	useEffect(() => {
		if (status == 'edit') {
			setName(addressState.address.name);
			setPhone(addressState.address.phone);
			setAddress(addressState.address.address);
			setCity(addressState.address.city);
			setPost(addressState.address.postalCode);
		}
	}, [status]);

	const submitPressed = () => {
		setLoading(true);
		(address.length < 1 ||
			city.length < 1 ||
			post.length < 1 ||
			name.length < 1 ||
			phone.length < 7) &&
			setError(true);

		if (address.length < 1) {
			setErrorMessage('Address is required');
		} else if (name.length < 1) {
			setErrorMessage('Name is required');
		} else if (city.length < 1) {
			setErrorMessage('City is required');
		} else if (post.length < 1) {
			setErrorMessage('Postcode is required');
		} else if (phone.length < 7) {
			setErrorMessage('Please provide a valid phone number');
		} else {
			dispatch(
				addAddressAction({
					name: name,
					address: address,
					city: city,
					postalCode: post,
					phone: phone,
				})
			);
			if (status == 'edit') {
				router.replace('/checkout/confirmation');
			} else {
				router.replace('/checkout/payment');
			}
		}
		setLoading(false);
	};

	return (
		<div className={styles.shippingPage}>
			<div className={styles.formContainer}>
				<h2>Shipping Address</h2>
				<div className={styles.form}>
					<TextInput
						label='Address'
						placeholder='Address'
						value={address}
						onChange={e => setAddress(e)}
					/>
					<TextInput
						label='City'
						placeholder='City'
						value={city}
						onChange={e => setCity(e)}
					/>
					<TextInput
						label='Post Code'
						placeholder='Post Code'
						value={post}
						onChange={e => setPost(e)}
					/>
					<TextInput
						label='Recipient Name'
						placeholder='Recipient Name'
						value={name}
						onChange={e => setName(e)}
					/>
					<TextInput
						label='Recipient Phone'
						placeholder='Recipient Phone'
						value={phone}
						onChange={e => setPhone(e)}
					/>
					{error && (
						<div className={styles.error}>
							<p>{errorMessage}</p>
						</div>
					)}
					<div className={styles.submit}>
						<ButtonPrimary rounded onClick={!loading && submitPressed}>
							{loading ? 'Processing' : 'Proceed to Payment'}
						</ButtonPrimary>
					</div>
				</div>
			</div>
			<OrderSummaryMock items={items} />
		</div>
	);
};

export default Shipping;
