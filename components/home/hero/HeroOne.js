import React from 'react';
import styles from './Hero.module.css';

const HeroOne = () => {
	return (
		<div className={styles.heroOne}>
			<div className={styles.overlay}>
				<h1>Covid Essentials</h1>
			</div>
		</div>
	);
};

export default HeroOne;
