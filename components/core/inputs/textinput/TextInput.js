import React from 'react';
import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

const TextInput = ({ label, placeholder, type, value, onClick }) => {
	return (
		<div className={styles.inputContainer}>
			<label>{label}</label>
			<input type={type} placeholder={placeholder} />
		</div>
	);
};

TextInput.propTypes = {
	type: PropTypes.string,
};

TextInput.defaultProps = {
	type: 'text',
};

export default TextInput;
