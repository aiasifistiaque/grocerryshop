import React from 'react';
import styles from './Description.module.scss';

const Return = ({ terms }) => {
	return (
		<div className={styles.description}>
			<h2>Terms and Return Policy</h2>
			{terms.map((item, i) => (
				<p key={i} style={{ margin: '0 .5em' }}>
					- {item}
				</p>
			))}
		</div>
	);
};

export default Return;
