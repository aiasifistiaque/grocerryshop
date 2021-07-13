import React from 'react';
import styles from './OrderComponent.module.css';

const LoadingError = () => {
	return (
		<div className={styles.error}>
			<h2>Sorry, Something broke. Try again</h2>
		</div>
	);
};

export default LoadingError;
