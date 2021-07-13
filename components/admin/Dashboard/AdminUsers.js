import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminPageMain from './AdminPageMain';
import getSingleUserAction from '../../../store/actions/admin/getSingleUserAction';
import AdminUserComponent from '../order/AdminUserComponent';

const AdminUsers = ({ id }) => {
	const { user, loading, error } = useSelector(state => state.user);

	const dispatch = useDispatch();
	useEffect(() => {
		if (id != undefined) dispatch(getSingleUserAction(id));
	}, [id]);

	return (
		<AdminPageMain>
			<h3>User #{id}</h3>
			<br />
			<AdminUserComponent />
		</AdminPageMain>
	);
};

export default AdminUsers;
