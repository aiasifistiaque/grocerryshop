import React from 'react';
import styles from './NavBar.module.css';
import {
	faBars,
	faSearch,
	faUser,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ barPressed, open, close }) => {
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
					<NavRightIcon icon={faUser} />
					<NavRightIcon icon={faShoppingCart} />
				</div>
			</div>
		</>
	);
};

const NavRightIcon = ({ icon }) => {
	return (
		<a>
			<FontAwesomeIcon icon={icon} height={15} />
		</a>
	);
};

const NavBrand = () => {
	return (
		<>
			<a>BAAL SAAL</a>
		</>
	);
};

export default NavBar;
