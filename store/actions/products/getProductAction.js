import axios from 'axios';
import { api } from '../../../constants';
import {
	getProductRequest,
	getProductSuccess,
	getProductFail,
} from '../../storeConstants';

const getProductAction = id => async dispatch => {
	try {
		dispatch({ type: getProductRequest });
		const { data } = await axios.get(`${api.products}/${id}`);

		dispatch({ type: getProductSuccess, payload: data });
	} catch (error) {
		dispatch({
			type: getProductFail,
			payload:
				error.response && error.response ? error.response : error.message,
		});
	}
};

export default getProductAction;
