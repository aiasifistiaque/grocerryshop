import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
const profile = {
	name: 'Asif Istiaque',
};

const Menu = () => {
	return (
		<div className={styles.menuSectionContainer}>
			<div className={styles.overview}>
				<Image src='/pp.svg' height={100} width={100} />
				<h3>{profile.name}</h3>
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
