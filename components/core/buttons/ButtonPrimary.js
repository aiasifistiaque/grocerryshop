import React from 'react';
import styles from './Buttons.module.css';

const ButtonPrimary = ({ children, onClick, rounded }) => {
	const classes = rounded
		? `${styles.buttonPrimary} ${styles.rounded}`
		: `${styles.buttonPrimary}`;
	return (
		<a className={classes} onClick={onClick}>
			{children}
		</a>
	);
};

export default ButtonPrimary;
