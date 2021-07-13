import React from 'react';
import styles from './OrderComponent.module.css';
import toTime from '../../../functions/toTime';
import { useSelector, useDispatch } from 'react-redux';
import SingleSelectEditCard from './SingleSelectEditCard';
import { changeRoleValueAction } from '../../../store/mix/editUserRole';

const UserSummary = ({ item }) => {
	const dispatch = useDispatch();
	const { edit, values, value } = useSelector(state => state.changeRole);

	return (
		<div className={styles.cardContainer}>
			<TwoCards>
				<SingleCard title='User Id'>{item._id}</SingleCard>
				<SingleCard title='Email'>{item.email}</SingleCard>
				<SingleCard title='Phone'>{item.phone}</SingleCard>
				{!edit ? (
					<SingleCard title='Role'>{value}</SingleCard>
				) : (
					<SingleSelectEditCard
						title='Change Role'
						data={values}
						value={item.role}
						setValue={e => dispatch(changeRoleValueAction(e))}
					/>
				)}
				<SingleCard title='Joined'>{toTime(item.createdAt)}</SingleCard>
			</TwoCards>
		</div>
	);
};

const TwoCards = ({ children }) => {
	return <div className={styles.doubleCard}>{children}</div>;
};

const SingleCard = ({ title, children }) => {
	return (
		<div className={styles.singleCard}>
			<h4>{title}:</h4>
			<p>{children}</p>
		</div>
	);
};

export default UserSummary;
