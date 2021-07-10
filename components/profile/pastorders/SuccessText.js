import React from 'react';
import styles from './PastOrders.module.css';

const SuccessText = ({ children }) => {
	return (
		<div className={styles.successful}>
			<h4>{children}</h4>
		</div>
	);
};

export default SuccessText;
