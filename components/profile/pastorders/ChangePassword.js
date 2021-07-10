import React, { useEffect, useState } from 'react';
import styles from './PastOrders.module.css';
import Menu from '../menu/Menu';
import { useSelector, useDispatch } from 'react-redux';
import getProfileAction from '../../../store/actions/user/getProfileAction';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/buttons/FormButton';
import ErrorText from './ErrorText';
import SuccessText from './SuccessText';
import changePasswordAction from '../../../store/actions/user/changePasswordAction';

const ChangePassword = ({ id }) => {
	const dispatch = useDispatch();
	const { loading, success, error } = useSelector(state => state.password);

	const [old, setOld] = useState();
	const [newPass, setNewPass] = useState();
	const [confirm, setConfirm] = useState();
	const [validationError, setValidationError] = useState();

	const changePassword = () => {
		setValidationError();
		if (!loading) {
			if (!old || !newPass || !confirm) {
				setValidationError('Field Values Missing');
			} else if (newPass != confirm) {
				setValidationError('Passwords Do Not Match');
			} else if (newPass.length < 6) {
				setValidationError('Password must be atleast 6 characters');
			} else {
				dispatch(changePasswordAction(old, newPass));
			}
		}
	};

	return (
		<div className={styles.ppContainer}>
			<Menu id={id} />

			<div className={styles.orderContainer}>
				<h3>Change Password</h3>
				{success && <SuccessText>Password Changed</SuccessText>}
				{validationError && !error && <ErrorText>{validationError}</ErrorText>}
				{error && <ErrorText>{error}</ErrorText>}

				<div style={{ margin: '.25em' }}>
					<TextInput
						label='Old Password'
						placeholder='Old Password'
						type='password'
						value={old}
						onChange={e => setOld(e)}
					/>
					<TextInput
						label='New Password'
						placeholder='New Password'
						type='password'
						value={newPass}
						onChange={e => setNewPass(e)}
					/>
					<TextInput
						label='Confirm Password'
						placeholder='Confirm Password'
						type='password'
						value={confirm}
						onChange={e => setConfirm(e)}
					/>

					<FormButton rounded onClick={changePassword}>
						{loading ? 'loading...' : 'Change Password'}
					</FormButton>
				</div>
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

export default ChangePassword;
