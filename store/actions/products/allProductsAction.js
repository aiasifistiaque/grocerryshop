import axios from 'axios';
import { api } from '../../../constants';
import {
	tokenName,
	getProductListRequest,
	getProductListSuccess,
	getProductFail,
} from '../../storeConstants';

const getAllProductsAction = (sort, page) => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: getProductListRequest });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.products,
			{ sort: (sort && sort) || '', page: page || 0 },
			config
		);

		const list = getState().productList.products;

		dispatch({
			type: getProductListSuccess,
			payload: {
				data: page > 0 ? list.concat(data.products) : data.products,
				end: data.length == 0 && true,
			},
		});
	} catch (error) {
		dispatch({
			type: getProductFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllProductsAction;
