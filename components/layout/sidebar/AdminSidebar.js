import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import {
	faChevronRight,
	faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { tokenName } from '../../../store/storeConstants';

const AdminSidebar = ({ barPressed, inv, close }) => {
	const invSpringStyle = useSpring({
		from: {
			x: '0%',
		},
		to: {
			x: !barPressed ? '-100%' : '0%',
		},
	});
	const springStyle = useSpring({
		from: {
			x: '-120%',
		},
		to: {
			x: barPressed ? '0%' : '-120%',
		},

		delay: 10,
	});
	return (
		<animated.div
			className={styles.sidebar}
			style={inv ? springStyle : invSpringStyle}>
			<NavItems inv={inv} onItemClick={inv ? close : {}} />
		</animated.div>
	);
};

const NavItems = ({ onItemClick }) => {
	const [loading, setLoading] = useState(true);

	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		setLoading(true);
		const token = JSON.parse(localStorage.getItem(tokenName));
		if (token) {
			setIsLogged(true);
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<>
			<h4>Menu</h4>

			<Link href={`/admin/dashboard`}>
				<a onClick={onItemClick}>Dashboard</a>
			</Link>
			<Link href={`/admin/products`}>
				<a onClick={onItemClick}>Products</a>
			</Link>
			<Link href={`/admin/orders`}>
				<a onClick={onItemClick}>Orders</a>
			</Link>

			<Link href={`/admin/users`}>
				<a onClick={onItemClick}>Users</a>
			</Link>
		</>
	);
};

const CategoryItem = ({ children }) => {
	return (
		<a className={styles.catItem}>
			{children}
			<FontAwesomeIcon
				icon={faChevronRight}
				height={10}
				className={styles.icon}
			/>
		</a>
	);
};

const SidebarItem = ({ item }) => {};

export default AdminSidebar;
