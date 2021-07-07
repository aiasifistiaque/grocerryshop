import React, { useState } from 'react';
import styles from './Register.module.css';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/inputs/textinput/FormButton';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../../../store/actions/user/loginAction';
import validateEmail from '../../../functions/validateEmail';

const Login = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector(state => state.login);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');

	const loginUser = () => {
		setValidationError(false);

		(email.length < 1 || !validateEmail(email) || password.length < 1) &&
			setValidationError(true);

		if (email.length < 1) {
			setValidationErrorText('Email is Required');
		} else if (!validateEmail(email)) {
			setValidationErrorText('Email is incorrectly formatted');
		} else if (password.length < 1) {
			setValidationErrorText('Password is Required');
		}
		!validationError && dispatch(loginAction(email, password, '/'));
	};
	return (
		<div className={styles.register}>
			<h2>Log In</h2>
			<TextInput
				label='Email'
				placeholder='Enter your name'
				value={email}
				onChange={e => setEmail(e)}
			/>
			<TextInput
				label='Password'
				placeholder='Password'
				type='password'
				value={password}
				onChange={e => setPassword(e)}
			/>
			{loading ? (
				<FormButton onClick={() => {}}>loading...</FormButton>
			) : (
				<FormButton onClick={loginUser}>Login</FormButton>
			)}
			<a className={styles.forgotPassword}>Forgot Password?</a>

			{validationError && (
				<div className={styles.error}>
					<p>ERROR: *{validationErrorText}</p>
				</div>
			)}

			<p>
				By proceeding, you agree to our <a>Terms of Use</a> and{'  '}
				<a>Privacy Policy</a>
			</p>
			<h4>
				New to Baal Saal?{' '}
				<Link href='/register'>
					<a>Register</a>
				</Link>
			</h4>
		</div>
	);
};

export default Login;
