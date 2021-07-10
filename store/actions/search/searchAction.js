import axios from 'axios';
import { api } from '../../../constants';
import { searchRequest, searchSuccess, searchFail } from '../../storeConstants';

const searchAction = searchString => async dispatch => {
	try {
		dispatch({ type: searchRequest });
		const { data } = await axios.post(api.search, { searchString }, api.config);

		dispatch({ type: searchSuccess, payload: data });
	} catch (error) {
		dispatch({
			type: searchFail,
			payload:
				error.response && error.response ? error.response : error.message,
		});
	}
};

export default searchAction;
