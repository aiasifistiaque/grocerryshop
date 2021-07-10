import { api } from '../../../constants';
import axios from 'axios';
import {
	editProfileRequest,
	editProfileSuccess,
	editProfileFail,
	tokenName,
} from '../../storeConstants';

const editProfileAction = (name, phone) => async dispatch => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: editProfileRequest });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.put(
			api.editUser,
			{ name: name, phone: phone },
			config
		);

		dispatch({ type: editProfileSuccess, payload: data });
	} catch (error) {
		dispatch({
			type: editProfileFail,
			payload:
				error.response && error.response.data
					? error.response.data
					: error.message,
		});
	}
};

export default editProfileAction;
