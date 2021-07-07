import React from 'react';
import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

const FormButton = ({ children, onClick }) => {
	return (
		<div className={styles.submitButton} onClick={onClick}>
			<input type='submit' value={children} />
		</div>
	);
};

export default FormButton;
