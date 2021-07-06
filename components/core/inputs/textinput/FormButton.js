import React from 'react';
import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

const FormButton = ({ children }) => {
	return (
		<div className={styles.submitButton}>
			<input type='submit' value={children} />
		</div>
	);
};

export default FormButton;
