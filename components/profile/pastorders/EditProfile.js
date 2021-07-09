import React, { useEffect } from 'react';
import styles from './PastOrders.module.css';
import Menu from '../menu/Menu';
import { useSelector, useDispatch } from 'react-redux';
import getProfileAction from '../../../store/actions/user/getProfileAction';
import isEmpty from '../../../functions/isEmpty';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/buttons/FormButton';

const EditProfile = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading } = useSelector(state => state.user);
	useEffect(() => {
		dispatch(getProfileAction());
	}, []);
	return (
		<div className={styles.ppContainer}>
			<Menu id={id} />

			<div className={styles.orderContainer}>
				<h3>Edit Profile</h3>
				{loading || isEmpty(user) ? (
					<Loading />
				) : (
					<div style={{ margin: '.25em' }}>
						<TextInput label='Name' value={user.name} />
						<TextInput label='Phone' value={user.phone} />
						<FormButton rounded>Save Changes</FormButton>
					</div>
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

export default EditProfile;
