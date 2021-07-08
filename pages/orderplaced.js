import React from 'react';
import HomePage from '../components/layout/HomePage/HomePage';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import OrderPlaced from '../components/temp/OrderPlaced';

const orderplaced = () => {
	return (
		<HomePage inv>
			<OrderPlaced />
		</HomePage>
	);
};

export default orderplaced;
