import React, { useEffect } from 'react';
import styles from './OrderComponent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from '../../../functions/isEmpty';
import Loading from '../../core/loading/Loading';
import OrderSummary from './OrderSummary';
import Image from 'next/image';
import { general } from '../../../constants';
import Link from 'next/link';
import FormButton from '../../core/buttons/FormButton';
import UserSummary from './UserSummary';
import { AdminListContainer, AdminListCard } from '../acomps';
import toTime from '../../../functions/toTime';
import {
	startRoleEditAction,
	changeRoleValueAction,
	cancelRoleEditAction,
	changeRoleAction,
} from '../../../store/mix/editUserRole';

const AdminUserComponent = ({ id }) => {
	const { user, loading, error } = useSelector(state => state.user);
	const role = useSelector(state => state.changeRole);
	const dispatch = useDispatch();

	const { edit } = role;

	useEffect(() => {
		dispatch(cancelRoleEditAction());
	}, []);

	useEffect(() => {
		if (user && user.user && user.user.role) {
			dispatch(changeRoleValueAction(user.user.role));
		}
	}, [user]);

	const buttonText = role.loading
		? 'Processing...'
		: edit
		? 'Save Changes'
		: 'Change Role';

	const onEdit = () => {
		if (!edit) {
			dispatch(startRoleEditAction());
			dispatch(changeRoleValueAction(user.user.role));
		} else {
			if (!role.loading) {
				dispatch(changeRoleAction(user.user._id));
			}
		}
	};

	if (loading) return <Loading />;
	if (error) return null;
	if (isEmpty(user)) return null;

	return (
		<div className={styles.ocContainer}>
			<div className={styles.orderContainer}>
				<h2>User Summary</h2>

				<UserSummary item={user.user} />
				<FormButton rounded onClick={onEdit}>
					{buttonText}
				</FormButton>
			</div>

			<div className={styles.itemCardContainer}>
				<h2>User Orders</h2>
				<AdminListContainer>
					{user.orders && user.orders.length == 0 && (
						<AdminListCard>
							<p>No orders placed yet</p>
						</AdminListCard>
					)}
					{user.orders &&
						user.orders.map((item, i) => (
							<AdminListCard key={i}>
								<p>Data: {toTime(item.createdAt)}</p>
								<p>
									{general.takaSymbol + ' '}
									{item.totalPrice}
								</p>

								<p>Status: {item.status}</p>
								<Link href={`/admin/order?serial=${item._id}`}>
									<a>Details</a>
								</Link>
							</AdminListCard>
						))}
				</AdminListContainer>
			</div>
		</div>
	);
};

export default AdminUserComponent;
