import React from 'react';
import styles from './PastOrders.module.css';

const ErrorText = ({ children }) => {
	return (
		<div className={styles.errorText}>
			<h4>{children}</h4>
		</div>
	);
};

export default ErrorText;
