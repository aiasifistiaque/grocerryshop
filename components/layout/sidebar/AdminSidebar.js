import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Sidebar.module.css';
import categoryData from '../../../data/categoryData';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import logoutAction from '../../../store/actions/user/logoutAction';
import { tokenName } from '../../../store/storeConstants';

const AdminSidebar = ({ barPressed, inv }) => {
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
			<NavItems />
		</animated.div>
	);
};

const NavItems = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

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
				<a>Dashboard</a>
			</Link>
			<Link href={`/admin/products`}>
				<a>Products</a>
			</Link>
			<Link href={`/admin/orders`}>
				<a>Orders</a>
			</Link>

			<Link href={`/admin/users`}>
				<a>Users</a>
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
