import React from 'react';
import styles from './Register.module.css';
import TextInput from '../../core/inputs/textinput/TextInput';
import FormButton from '../../core/inputs/textinput/FormButton';
import Link from 'next/link';

const Register = () => {
	return (
		<div className={styles.register}>
			<h2>Create Account</h2>
			<TextInput label='Full Name*' placeholder='Enter your name' />
			<TextInput label='Email*' placeholder='someone@gmail.com' />
			<TextInput label='Password*' placeholder='Password' type='password' />
			<TextInput
				label='Confirm Password*'
				placeholder='Confirm Password'
				type='password'
			/>
			<FormButton>Register</FormButton>
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
