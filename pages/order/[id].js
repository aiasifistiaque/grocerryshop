import React, { useEffect } from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import OrderComponent from '../../components/order/OrderComponent';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getOrderAction from '../../store/actions/orders/getOrderAction';

const OrderPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id, status } = router.query;

	useEffect(() => {
		console.log(id);
		if (id == undefined) {
			return;
		} else {
			dispatch(getOrderAction(id));
		}
	}, [id]);

	return (
		<HomePage inv>
			<OrderComponent status={status} />
		</HomePage>
	);
};

export default OrderPage;
