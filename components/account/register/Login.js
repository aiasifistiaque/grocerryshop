import React from 'react';
import styles from './Register.module.css';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/inputs/textinput/FormButton';
import Link from 'next/link';

const Login = () => {
	return (
		<div className={styles.register}>
			<h2>Log In</h2>
			<TextInput label='Email' placeholder='Enter your name' />
			<TextInput label='Password' placeholder='Password' type='password' />
			<FormButton>Login</FormButton>
			<a className={styles.forgotPassword}>Forgot Password?</a>

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
