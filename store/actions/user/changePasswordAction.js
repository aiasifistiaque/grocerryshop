import { api } from '../../../constants';
import axios from 'axios';
import {
	editProfileRequest,
	editProfileSuccess,
	editProfileFail,
	tokenName,
	changePasswordSuccess,
	changePasswordRequest,
	changePasswordFail,
} from '../../storeConstants';
import { changePasswordReducer } from '../../reducers/userReducer';

const changePasswordAction = (password, newpass) => async dispatch => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: changePasswordRequest });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(
			api.changePassword,
			{ password, newpass },
			config
		);

		dispatch({ type: changePasswordSuccess, payload: data });
	} catch (error) {
		dispatch({
			type: changePasswordFail,
			payload:
				error.response && error.response.data
					? error.response.data
					: error.message,
		});
	}
};

export default changePasswordAction;
