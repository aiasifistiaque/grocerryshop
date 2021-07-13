import React from 'react';
import styles from './Footer.module.scss';
import { shopData } from '../../../constants';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>Copyright &copy; 2021 | {shopData.name} Shop | All Rights Reserved.</p>
		</div>
	);
};

export default Footer;
