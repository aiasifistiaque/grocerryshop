import React, { forwardRef } from 'react';
import styles from './NavBar.module.css';
import {
	faBars,
	faSearch,
	faUser,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import logoutAction from '../../../store/actions/user/logoutAction';
import useAuth from '../../../hooks/useAuth';

const NavBar = ({ barPressed, open, close }) => {
	const { loading, isLoggedIn } = useAuth();
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.navbar}>
				<FontAwesomeIcon
					icon={faBars}
					onClick={barPressed ? close : open}
					className={styles.navcollapseStraight}
				/>
				<div className={styles.navbrand}>
					<NavBrand />
				</div>

				<div className={styles.navRight}>
					<NavRightIcon icon={faSearch} />
					<Link
						href={
							!loading && isLoggedIn
								? '/profile/overview'
								: '/login?from=profile/overview'
						}
						passHref>
						<NavRightIcon icon={faUser} />
					</Link>
					<Link href='/checkout/cart' passHref>
						<NavRightIcon icon={faShoppingCart} />
					</Link>

					{loading ? null : isLoggedIn ? (
						<div onClick={() => dispatch(logoutAction())}>
							<a style={{ fontSize: '.8em', textTransform: 'lowercase' }}>
								logout
							</a>
						</div>
					) : (
						<Link href='/login'>
							<a>Login</a>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

const NavRightIcon = forwardRef(({ icon, href }, ref) => {
	return (
		<a href={href} ref={ref}>
			<FontAwesomeIcon icon={icon} height={15} />
		</a>
	);
});

const NavBrand = () => {
	return (
		<>
			<Link href='/'>
				<a>BAAL SAAL</a>
			</Link>
		</>
	);
};

export default NavBar;
