import React, { useEffect } from 'react';
import styles from './PastOrders.module.css';
import Menu from '../menu/Menu';
import { useSelector, useDispatch } from 'react-redux';
import getProfileAction from '../../../store/actions/user/getProfileAction';
import isEmpty from '../../../functions/isEmpty';

const Overview = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading } = useSelector(state => state.user);
	useEffect(() => {
		dispatch(getProfileAction());
	}, []);
	return (
		<div className={styles.ppContainer}>
			<Menu id={id} />

			<div className={styles.orderContainer}>
				<h3>My Profile</h3>
				{loading || isEmpty(user) ? (
					<Loading />
				) : (
					<>
						<SingleCard title='Name'>{user.name}</SingleCard>
						<SingleCard title='Email'>{user.email}</SingleCard>
						<SingleCard title='Phone'>{user.phone}</SingleCard>
					</>
				)}
			</div>
		</div>
	);
};

const SingleCard = ({ title, children }) => {
	return (
		<div className={styles.singleCard}>
			<h4>{title}:</h4>
			<p>{children}</p>
		</div>
	);
};

const Loading = () => {
	return (
		<div className={styles.noOrders}>
			<h4>Loading...</h4>
		</div>
	);
};

export default Overview;
