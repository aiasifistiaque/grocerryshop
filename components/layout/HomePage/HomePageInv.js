//

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './HomePage.module.css';
import NavBar from '../nav/NavBar';
import useGetWindowSize from '../../../hooks/useGetWindowSize';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const HomePageInv = ({ children, style }) => {
	const { isDesktop } = useGetWindowSize();
	const [openNav, setOpenNav] = useState(false);

	return (
		<div>
			<Head>
				<title>ecomerce</title>
				<meta name='description' content=';asdlka' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<NavBar
				barPressed={openNav}
				open={() => setOpenNav(true)}
				close={() => setOpenNav(false)}
				select={item => setScrollItem(item)}
			/>

			<main
				className={styles.container}
				//onClick={() => setOpenNav(false)}
				style={style || {}}>
				<Sidebar barPressed={openNav} />
				<div
					className={styles.homeMain}
					style={{ marginLeft: openNav && isDesktop ? 250 : 0 }}>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default HomePageInv;
