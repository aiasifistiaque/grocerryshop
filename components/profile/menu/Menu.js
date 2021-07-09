import React, { useEffect } from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Menu = () => {
	const { user, loading } = useSelector(state => state.user);

	return (
		<div className={styles.menuSectionContainer}>
			<div className={styles.overview}>
				<Image src='/pp.svg' height={100} width={100} />
				<h3>{loading ? 'loading...' : user.name}</h3>
			</div>
			<div className={styles.menu}>
				<div className={styles.header}>
					<h3>Menu</h3>
				</div>
				<div className={styles.itemContainer}>
					<MenuItem>Overview</MenuItem>
					<MenuItem>Active Orders</MenuItem>
					<MenuItem>Purchase History</MenuItem>
					<MenuItem>Manage Profile</MenuItem>
				</div>
			</div>
		</div>
	);
};

const MenuItem = ({ children }) => {
	return (
		<div className={styles.item}>
			<p>{children}</p>
		</div>
	);
};
export default Menu;
