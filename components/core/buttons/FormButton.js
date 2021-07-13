import React from 'react';
import styles from './Buttons.module.css';

const FormButton = ({ children, onClick, rounded, disabled }) => {
	const classes = rounded
		? `${styles.buttonPrimary} ${styles.rounded}`
		: `${styles.buttonPrimary}`;
	return (
		<div className={styles.submit}>
			<a className={classes} onClick={onClick}>
				{children}
			</a>
		</div>
	);
};

export default FormButton;
