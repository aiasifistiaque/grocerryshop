import React from 'react';
import styles from './Acomps.module.css';

const AdminSelect = ({ value, setValue, data }) => {
	return (
		<select
			className={styles.select}
			value={value}
			onChange={e => {
				setValue(e.target.value);
			}}>
			{data.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default AdminSelect;
