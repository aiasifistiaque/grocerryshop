import React, { useState, useEffect } from 'react';

const useGetWindowSize = () => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);
	const [loading, setLoading] = useState(true);

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
		setLoading(false);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { height, width, isDesktop, loading };
};

export default useGetWindowSize;
