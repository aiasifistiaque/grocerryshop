import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import PastOrders from '../../components/profile/pastorders/PastOrders';
import { useDispatch } from 'react-redux';
import getProfileAction from '../../store/actions/user/getProfileAction';

const ProfilePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProfileAction());
	}, [dispatch]);
	return (
		<HomePage inv>
			<PastOrders />
		</HomePage>
	);
};

export default ProfilePage;
