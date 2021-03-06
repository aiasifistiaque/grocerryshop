import axios from 'axios';
import { api } from '../../../constants';
import {
	getProductListRequest,
	getProductListSuccess,
	getProductListFail,
} from '../../storeConstants';

const getProductsByCategoryAction = (id, type, page) => async (
	dispatch,
	getState
) => {
	let target;

	if (type == 'sub') {
		target = `${api.productsBySubcategory}/${id}`;
	} else if (type == 'tag') {
		target = `${api.productsByTag}/${id}`;
	} else {
		target = `${api.productsByCategory}/${id}`;
	}

	try {
		dispatch({ type: getProductListRequest });
		const { data } = await axios.post(target, { page: page || 0 }, api.config);

		const list = getState().productList.products;

		dispatch({
			type: getProductListSuccess,
			payload: {
				data: page > 0 ? list.concat(data) : data,
				end: data.length == 0 && true,
			},
		});
	} catch (error) {
		dispatch({
			type: getProductListFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getProductsByCategoryAction;
