import React from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import PastOrders from '../../components/profile/pastorders/PastOrders';

const ProfilePage = () => {
	return (
		<HomePage inv>
			<PastOrders />
		</HomePage>
	);
};

export default ProfilePage;
