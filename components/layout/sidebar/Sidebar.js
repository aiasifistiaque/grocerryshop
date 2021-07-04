import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Sidebar.module.css';
import categoryData from '../../../data/categoryData';

const Sidebar = ({ barPressed }) => {
	const springStyle = useSpring({
		from: {
			x: '-120%',
		},
		to: {
			x: barPressed ? '0%' : '-120%',
		},

		delay: 100,
	});
	return (
		<animated.div className={styles.sidebar} style={springStyle}>
			<NavItems />
		</animated.div>
	);
};

const NavItems = () => {
	return (
		<>
			{categoryData.map(item => (
				<a key={item.id}>{item.name}</a>
			))}

			<a>About</a>
			<a>Team</a>
			<a>Our Story</a>
			<a>Privacy Policy</a>
			<a>Terms of use</a>
		</>
	);
};

export default Sidebar;
