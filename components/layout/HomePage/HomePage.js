//

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './HomePage.module.css';
import NavBar from '../nav/NavBar';
import useGetWindowSize from '../../../hooks/useGetWindowSize';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const HomePage = ({ children, style, inv }) => {
	const { isDesktop } = useGetWindowSize();
	const [openNav, setOpenNav] = useState(false);
	useEffect(() => {
		if (isDesktop) {
			!inv && setOpenNav(true);
		}
	}, [isDesktop]);
	return (
		<div>
			<Head>
				<title>ecoomerce</title>
				<meta name='description' content=';asdlka' />
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
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

export default HomePage;
