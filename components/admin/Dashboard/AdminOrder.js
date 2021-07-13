import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOrderAction from '../../../store/actions/orders/getOrderAction';
import AdminPageMain from './AdminPageMain';
import AdminOrderComponent from '../order/AdminOrderComponent';
import FormButton from '../../core/buttons/FormButton';

const AdminOrder = ({ id }) => {
	const dispatch = useDispatch();
	const { order, loading, error } = useSelector(state => state.product);
	useEffect(() => {
		if (id != undefined) dispatch(getOrderAction(id));
	}, [id]);

	return (
		<AdminPageMain>
			<h3>Order #{id}</h3>
			<br />
			<AdminOrderComponent />
		</AdminPageMain>
	);
};

export default AdminOrder;
