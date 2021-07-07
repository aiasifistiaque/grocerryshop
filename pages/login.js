import React, { useEffect } from 'react';
import HomePage from '../components/layout/HomePage/HomePage';
import Login from '../components/account/register/Login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageLoading from '../components/core/pageloading/PageLoading';

const PageLogin = () => {
	const { loggedIn } = useSelector(state => state.auth);
	const router = useRouter();
	useEffect(() => {
		if (loggedIn) {
			router.replace('/');
		}
	}, [loggedIn]);
	if (loggedIn) return <PageLoading />;

	return (
		<HomePage inv>
			<Login />
		</HomePage>
	);
};

export default PageLogin;
