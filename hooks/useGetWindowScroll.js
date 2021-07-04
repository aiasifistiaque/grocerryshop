import React, { useState, useEffect } from 'react';

const useGetWindowScroll = () => {
	const [scroll, setScroll] = useState(0);
	const [scrollingDown, setScrollingDown] = useState(false);

	useEffect(() => {
		let history = 0;
		setScroll(window.scrollY);

		function handleScroll() {
			window.scrollY > history
				? setScrollingDown(true)
				: setScrollingDown(false);

			history = window.scrollY;
			setScroll(window.scrollY);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { scroll, scrollingDown };
};

export default useGetWindowScroll;
