import React, { useEffect, useState } from 'react';
import styles from './PastOrders.module.css';
import Menu from '../menu/Menu';
import { useSelector, useDispatch } from 'react-redux';
import getProfileAction from '../../../store/actions/user/getProfileAction';
import isEmpty from '../../../functions/isEmpty';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/buttons/FormButton';
import editProfileAction from '../../../store/actions/user/editProfileAction';
import SuccessText from './SuccessText';

const EditProfile = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading, error, edit } = useSelector(state => state.user);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [pageLoad, setPageLoad] = useState(true);

	useEffect(() => {
		dispatch(getProfileAction());
	}, []);

	useEffect(() => {
		if (pageLoad) {
			if (!isEmpty(user) || error) {
				setPageLoad(loading);
			}
		}
	}, [loading]);

	useEffect(() => {
		if (user != undefined && !loading && !error) {
			setName(user.name);
			setPhone(user.phone);
		}
	}, [user]);

	return (
		<div className={styles.ppContainer}>
			<Menu id={id} />

			<div className={styles.orderContainer}>
				<h3>Edit Profile</h3>
				{pageLoad ? (
					<Loading />
				) : error ? (
					<Error />
				) : (
					<>
						{edit == 1 && <SuccessText>Edited Successfully</SuccessText>}
						<div style={{ margin: '.25em' }}>
							<TextInput
								label='Name'
								placeholder='Name'
								value={name}
								onChange={e => setName(e)}
							/>
							<TextInput
								label='Phone'
								placeholder='Phone'
								value={phone}
								onChange={e => setPhone(e)}
							/>
							<FormButton
								rounded
								onClick={() => {
									console.log('editing');
									!loading && dispatch(editProfileAction(name, phone));
								}}>
								{loading && !pageLoad ? 'loading' : 'Save Changes'}
							</FormButton>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const Loading = () => {
	return (
		<div className={styles.noOrders}>
			<h4>Loading...</h4>
		</div>
	);
};

const Error = () => {
	return (
		<div className={styles.noOrders}>
			<h4>An error occured, please try again.</h4>
		</div>
	);
};

export default EditProfile;
