import React from 'react';
import styles from './Buttons.module.css';

const ButtonOne = ({ children }) => {
	return <a className={styles.buttonOne}>{children}</a>;
};

export default ButtonOne;
