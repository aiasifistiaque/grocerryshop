import React, { useState } from 'react';
import styles from './Register.module.css';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/inputs/textinput/FormButton';
import Link from 'next/link';
import validateEmail from '../../../functions/validateEmail';
import registerAction from '../../../store/actions/user/registerAction';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector(state => state.signup);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');

	const registerUser = () => {
		setValidationError(false);

		(name.length < 1 ||
			email.length < 4 ||
			!validateEmail(email) ||
			password.length < 7 ||
			password != confirmPassword) &&
			setValidationError(true);

		if (name.length < 1) {
			setValidationErrorText('Name is Required');
		} else if (name.length < 4) {
			setValidationErrorText('Name must be 4 characters long');
		} else if (email.length < 1) {
			setValidationErrorText('Email is Required');
		} else if (!validateEmail(email)) {
			setValidationErrorText('Email is incorrectly formatted');
		} else if (password.length < 1) {
			setValidationErrorText('Password is Required');
		} else if (password.length < 1) {
			setValidationErrorText('Passwords is required');
		} else if (password.length < 7) {
			setValidationErrorText('Passwords must be 6 characters long');
		} else if (password != confirm) {
			setValidationErrorText('Passwords do not match');
		}
		!validationError && dispatch(registerAction(name, email, password));
	};

	return (
		<div className={styles.register}>
			<h2>Create Account</h2>
			<TextInput
				label='Full Name*'
				placeholder='Enter your name'
				value={name}
				onChange={e => setName(e)}
			/>
			<TextInput
				label='Email*'
				placeholder='someone@gmail.com'
				value={email}
				onChange={e => setEmail(e)}
			/>
			<TextInput
				label='Password*'
				placeholder='Password'
				type='password'
				value={password}
				onChange={e => setPassword(e)}
			/>
			<TextInput
				label='Confirm Password*'
				placeholder='Confirm Password'
				type='password'
				value={confirmPassword}
				onChange={e => setConfirmPassword(e)}
			/>
			{loading ? (
				<FormButton onClick={() => {}}>loading...</FormButton>
			) : (
				<FormButton onClick={registerUser}>Register</FormButton>
			)}
			{(error || validationError) && (
				<div className={styles.error}>
					<p>ERROR: *{error || validationErrorText}</p>
				</div>
			)}

			<p>
				By proceeding, you agree to our <a>Terms of Use</a> and{'  '}
				<a>Privacy Policy</a>
			</p>
			<h4>
				Already have an account?{' '}
				<Link href='/login'>
					<a>Log In</a>
				</Link>
			</h4>
		</div>
	);
};

export default Register;
