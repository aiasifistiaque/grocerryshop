import axios from 'axios';
import { api } from '../../../constants';
import {
	tokenName,
	getOrderRequest,
	getOrderSuccess,
	getOrderFail,
} from '../../storeConstants';

const getAllOrders = (sort, page) => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: getOrderRequest });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.getAllOrders,
			{ sort: sort, page: page || 0 },
			config
		);

		const list = getState().orderList.orders;
		const orders = page > 0 ? list.concat(data.orders) : data.orders;

		dispatch({
			type: getOrderSuccess,
			payload: { orders: orders, count: data.count },
		});
	} catch (error) {
		dispatch({
			type: getOrderFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllOrders;
