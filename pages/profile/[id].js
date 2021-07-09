import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import PastOrders from '../../components/profile/pastorders/PastOrders';
import { useDispatch, useSelector } from 'react-redux';
import getProfileAction from '../../store/actions/user/getProfileAction';
import { useRouter } from 'next/dist/client/router';
import Overview from '../../components/profile/pastorders/Overview';
import EditProfile from '../../components/profile/pastorders/EditProfile';
import ChangePassword from '../../components/profile/pastorders/ChangePassword';
import isEmpty from '../../functions/isEmpty';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		dispatch(getProfileAction());
	}, [dispatch]);
	return (
		<HomePage inv>
			{id == 'overview' ? (
				<Overview id={id} />
			) : id == 'history' ? (
				<PastOrders id={id} />
			) : id == 'edit' ? (
				<EditProfile id={id} />
			) : id == 'change' ? (
				<ChangePassword id={id} />
			) : (
				<Overview />
			)}
		</HomePage>
	);
};

export default ProfilePage;
