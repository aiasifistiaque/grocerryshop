import React, { useState } from 'react';
import styles from './OrderComponent.module.css';

const SingleSelectEditCard = ({ title, value, data, setValue }) => {
	const [thisValue, setThisValue] = useState(value);
	return (
		<div className={styles.singleCard} style={{ alignItems: 'center' }}>
			<h4>{title}:</h4>
			<select
				className={styles.select}
				value={thisValue}
				onChange={e => {
					setThisValue(e.target.value);
					setValue(e.target.value);
				}}>
				{data.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default SingleSelectEditCard;
