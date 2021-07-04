import React, { useState, useEffect } from 'react';

const useGetWindowSize = () => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
		window.innerWidth < 840 ? setIsDesktop(false) : setIsDesktop(true);

		function handleResize() {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
			window.innerWidth < 840 ? setIsDesktop(false) : setIsDesktop(true);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { height, width, isDesktop };
};

export default useGetWindowSize;
