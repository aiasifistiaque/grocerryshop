import React from 'react';
import styles from './Buttons.module.css';

const LongButton = ({ children }) => {
	return <a className={styles.longButton}>{children}</a>;
};

export default LongButton;
