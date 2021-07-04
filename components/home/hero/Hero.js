import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.overlay}>
				<h1>Baal Saal BAZAAR</h1>
			</div>
		</div>
	);
};

export default Hero;
