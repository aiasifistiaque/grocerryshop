import React from 'react';
import styles from './TextInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ placeholder, value, onChange, onClick }) => {
	return (
		<div className={styles.searchInput}>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
			<div className={styles.btnContainer} onClick={onClick}>
				<FontAwesomeIcon icon={faSearch} height={15} />
			</div>
		</div>
	);
};

export default SearchInput;
