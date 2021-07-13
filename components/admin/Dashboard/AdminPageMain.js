import React from 'react';
import styles from './Dashboard.module.css';

const AdminPageMain = ({ children }) => {
	return <div className={styles.adminPage}>{children}</div>;
};

export default AdminPageMain;
