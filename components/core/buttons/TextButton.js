import React from 'react';
import styles from './Buttons.module.css';

const TextButton = ({ children, onClick }) => {
	return (
		<a className={styles.textButton} onClick={onClick}>
			{children}
		</a>
	);
};

export default TextButton;
