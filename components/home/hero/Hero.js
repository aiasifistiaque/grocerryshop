import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.overlay}>
				<h1>Groceries Delivered in 1 hour</h1>
			</div>
		</div>
	);
};

export default Hero;
