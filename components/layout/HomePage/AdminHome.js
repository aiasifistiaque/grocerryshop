//

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './HomePage.module.css';
import NavBar from '../nav/NavBar';
import useGetWindowSize from '../../../hooks/useGetWindowSize';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Search from '../../search/Search';
import PageLoading from '../../core/pageloading/PageLoading';
import AdminSidebar from '../sidebar/AdminSidebar';

const AdminHome = ({ children, style, inv }) => {
	const { isDesktop, loading } = useGetWindowSize();
	const [openNav, setOpenNav] = useState(false);
	const [searchActive, setSearchActive] = useState(false);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		if (!loading) {
			if (isDesktop) {
				!inv && setOpenNav(true);
			}
			setLoad(true);
		}
	}, [loading]);

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
				on={() => setSearchActive(!searchActive)}
				search={searchActive}
			/>

			<Search active={searchActive} off={() => setSearchActive(false)} />

			{!load ? (
				<PageLoading />
			) : (
				<main
					className={searchActive ? styles.containerOverLay : styles.container}
					//onClick={() => setOpenNav(false)}
					onClick={() => setSearchActive(false)}
					style={style || {}}>
					{searchActive && <div className={styles.overlay} />}

					<AdminSidebar barPressed={openNav} inv={!isDesktop ? true : inv} />
					<div
						className={styles.homeMain}
						style={{ marginLeft: openNav && isDesktop ? 250 : 0 }}>
						{children}
					</div>
				</main>
			)}
			<Footer />
		</div>
	);
};

export default AdminHome;
