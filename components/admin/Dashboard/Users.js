import React, { useEffect, useState } from 'react';
import AdminPageMain from './AdminPageMain';
import { useDispatch, useSelector } from 'react-redux';
import { AdminListContainer, AdminListCard } from '../acomps';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import getAllUsersAction from '../../../store/actions/admin/getAllUsersAction';
import Link from 'next/link';

const Users = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(0);
	const { users, loading, success, count, error } = useSelector(
		state => state.allUsers
	);
	useEffect(() => {
		dispatch(getAllUsersAction('', page));
	}, [page]);

	if ((loading && page == 0) || error) return null;
	return (
		<AdminPageMain>
			<h3>Users</h3>
			<AdminListContainer>
				{users &&
					users &&
					users.map((item, i) => (
						<AdminListCard key={i}>
							<p>Name: {item.name}</p>
							<p>Email: {item.email}</p>
							<p>Role: {item.role}</p>
							{/* <p>Joined: {toTime(item.createdAt)}</p> */}
							<Link href={`/admin/user?serial=${item._id}`}>
								<a href='#'>Details</a>
							</Link>
						</AdminListCard>
					))}
			</AdminListContainer>
			<ButtonPrimary
				rounded
				onClick={() => {
					!loading && setPage(page + 1);
				}}>
				{loading ? 'Loading...' : 'Load More'}
			</ButtonPrimary>
		</AdminPageMain>
	);
};

export default Users;
