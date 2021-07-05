//

import React, { useState } from 'react';
import styles from './styles/Page.module.css';
//import NavBar from '../nav/NavBar';
import Head from 'next/head';
//import Footer from '../nav/Footer';

const Page = ({ children, style }) => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<div>
			<Head>
				<title>Legal Portfolio Template</title>
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
				//className={openNav ? styles.containerOverLay : styles.container}
				//onClick={() => setOpenNav(false)}
				style={style || {}}>
				<div
				//className={styles.overlay}
				//style={!openNav ? { display: 'none' } : {}}
				/>
				{children}
			</main>
		</div>
	);
};

export default Page;
