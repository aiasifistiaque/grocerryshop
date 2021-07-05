import React from 'react';
import styles from './Description.module.scss';

const Description = ({ children }) => {
	return (
		<div className={styles.description}>
			<h2>Description</h2>
			<p>{children}</p>
		</div>
	);
};

export default Description;
