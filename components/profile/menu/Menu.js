import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import logoutAction from '../../../store/actions/user/logoutAction';
import isEmpty from '../../../functions/isEmpty';

const Menu = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading } = useSelector(state => state.user);

	const [name, setName] = useState('...');

	useEffect(() => {
		!isEmpty(user) && setName(user.name);
	}, [user]);

	return (
		<div className={styles.menuSectionContainer}>
			<div className={styles.overview}>
				<Image src='/pp.svg' height={100} width={100} />
				<h3>{name}</h3>
			</div>
			<div className={styles.menu}>
				<div className={styles.header}>
					<h3>Menu</h3>
				</div>
				<div className={styles.itemContainer}>
					<MenuItem to='overview' id={id}>
						Overview
					</MenuItem>
					<MenuItem to='history' id={id}>
						Orders
					</MenuItem>
					<MenuItem to='edit' id={id}>
						Manage Profile
					</MenuItem>
					<MenuItem to='change' id={id}>
						Change Password
					</MenuItem>
					<Logout onClick={() => dispatch(logoutAction())}>Logout</Logout>
				</div>
			</div>
		</div>
	);
};

const MenuItem = ({ children, to, onClick, id }) => {
	if (id == to)
		return (
			<div className={styles.selectedItem} onClick={onClick}>
				<p>{children}</p>
			</div>
		);
	else
		return (
			<Link href={`/profile/${to}`}>
				<div className={styles.item} onClick={onClick}>
					<p>{children}</p>
				</div>
			</Link>
		);
};

const Logout = ({ children, onClick }) => {
	return (
		<div className={styles.item} onClick={onClick}>
			<p>{children}</p>
		</div>
	);
};
export default Menu;
