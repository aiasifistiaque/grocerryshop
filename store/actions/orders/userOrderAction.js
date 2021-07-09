import axios from 'axios';
import { api } from '../../../constants';
import {
	getOrderRequest,
	getOrderSuccess,
	getOrderFail,
} from '../../storeConstants';

const userOrderAction = (status, page) => async (dispatch, getState) => {
	const { token } = getState().auth;

	try {
		dispatch({ type: getOrderRequest });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.userorder,
			{ status: status, page: page },
			config
		);

		dispatch({ type: getOrderSuccess, payload: data });
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

export default userOrderAction;
