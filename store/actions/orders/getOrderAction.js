import axios from 'axios';
import { api } from '../../../constants';
import {
	createOrderRequest,
	createOrderSuccess,
	createOrderFail,
} from '../../storeConstants';

const getOrderAction = id => async (dispatch, getState) => {
	const { token } = getState().auth;

	try {
		dispatch({ type: createOrderRequest });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.get(`${api.order}/${id}`, config);

		console.log(id);

		dispatch({ type: createOrderSuccess, payload: data });
	} catch (error) {
		dispatch({
			type: createOrderFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getOrderAction;
