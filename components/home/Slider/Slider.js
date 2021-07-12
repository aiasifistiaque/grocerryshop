import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import styles from './Slider.module.css';
import Hero from '../hero/Hero';
import HeroOne from '../hero/HeroOne';
import HeroTwo from '../hero/HeroTwo';

export default function Slider() {
	const compArray = [
		<Hero key={1} />,
		<HeroOne key={2} />,
		<HeroTwo key={3} />,
	];
	const [index, setIndex] = useState(0);

	const [reverse, setReverse] = useState(false);

	const transitions = useTransition(index, {
		keys: index,
		initial: { opacity: 1, transform: `translateX(0px)` },
		from: {
			opacity: 1,
			transform: reverse ? `translateX(-100%)` : `translateX(100%)`,
		},
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: {
			opacity: 1,
			transform: reverse ? `translateX(100%)` : `translateX(-100%)`,
		},
		delay: 10,
		config: { duration: 600 },
	});

	useEffect(() => {
		setInterval(function () {
			setReverse(false);
			setIndex(state => (state + 1) % 3);
		}, 5000);
	}, []);

	const next = () => {
		setReverse(false);
		setIndex(state => (state + 1) % 3);
	};

	const prev = () => {
		setReverse(true);
		if (index == 0) {
			setIndex(2);
		} else {
			setIndex(state => state - 1);
		}
	};

	return (
		<div className={styles.container}>
			{transitions((style, i) => (
				<animated.div
					key={i}
					style={{
						position: 'absolute',
						width: '100vw',
						...style,
					}}>
					{compArray[i]}
				</animated.div>
			))}
		</div>
	);
}
