import axios from 'axios';
import { api } from '../../../constants';
import { getSubRequest, getSubSuccess, getSubFail } from '../../storeConstants';

const getSubAction = (id, type) => async dispatch => {
	try {
		dispatch({ type: getSubRequest });
		const { data } = await axios.post(api.subs, { id, type }, api.config);

		dispatch({
			type: getSubSuccess,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: getSubFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getSubAction;
