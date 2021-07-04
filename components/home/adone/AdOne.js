import React from 'react';
import styles from './AdOne.module.css';

const AdOne = () => {
	return (
		<div className={styles.adSection}>
			<div>
				<div className={styles.topAd} />
				<div className={styles.bottom}>
					<div className={styles.bottomAdOne} />
					<div className={styles.bottomAdTwo} />
				</div>
			</div>
		</div>
	);
};

export default AdOne;
