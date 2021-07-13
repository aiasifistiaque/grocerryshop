import { api } from '../../../constants';
import axios from 'axios';
import {
	tokenName,
	getProfileRequest,
	getProfileSuccess,
	getProductFail,
} from '../../storeConstants';

const getSingleUserAction = id => async dispatch => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: getProfileRequest });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(api.anUser, { id: id }, config);

		dispatch({ type: getProfileSuccess, payload: data });
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

export default getSingleUserAction;
