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

const Sidebar = ({ barPressed, inv }) => {
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
			<h4>Categories</h4>
			{categoryData.map(item => (
				<Link key={item.id} href={`/category/${item.name}`}>
					<a className={styles.catItem}>
						{item.name}
						<FontAwesomeIcon
							icon={faChevronRight}
							height={10}
							className={styles.icon}
						/>
					</a>
				</Link>
			))}
			<h4>Menu</h4>
			{!loading && !isLogged ? (
				<>
					<Link href={`/login`}>
						<a>Login</a>
					</Link>
					<Link href={`/register`}>
						<a>Register</a>
					</Link>
				</>
			) : (
				<Link href={`/profile/overview`}>
					<a>Dashboard</a>
				</Link>
			)}
			<a>About us</a>
			<a>Team</a>
			<a>Our Story</a>
			<a>Privacy Policy</a>
			<a>Terms of use</a>
			{!loading && isLogged && (
				<a onClick={() => dispatch(logoutAction())}>Logout</a>
			)}
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

export default Sidebar;
