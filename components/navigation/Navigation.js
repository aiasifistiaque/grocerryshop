import React from 'react';
import styles from './Navigation.module.css';
import Link from 'next/link';

const Navigation = ({ links, current }) => {
	return (
		<div className={styles.navigation}>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<span>{'/'}</span>
			{links.map((item, i) => (
				<>
					<Link href={item.to} key={i}>
						<a>{item.name}</a>
					</Link>
					<span>{'/'}</span>
				</>
			))}
			<p>{current}</p>
		</div>
	);
};

export default Navigation;
