import React, { useEffect } from 'react';
import HomePage from '../components/layout/HomePage/HomePage';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageLoading from '../components/core/pageloading/PageLoading';
import Register from '../components/account/register/Register';

const PageRegister = () => {
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
			<Register />
		</HomePage>
	);
};

export default PageRegister;
