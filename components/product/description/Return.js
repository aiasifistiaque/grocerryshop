import React from 'react';
import styles from './Description.module.scss';

const terms = [
	'Home delivery inside and outside Dhaka, from specific area shops to specific area',
	'The customer will pay the bill if products Weight more than 10 Kgs.',
	'Vat included with MRP',
];

const Return = () => {
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
