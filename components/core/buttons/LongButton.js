import React from 'react';
import styles from './Buttons.module.css';

const LongButton = ({ children, onClick }) => {
	return (
		<a className={styles.longButton} onClick={onClick}>
			{children}
		</a>
	);
};

export default LongButton;
