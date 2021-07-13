//

import { api } from '../../../constants';
import axios from 'axios';
import { tokenName } from '../../storeConstants';

const getAllUsersAction = (sort, page) => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: 'ALL_USER_REQUEST' });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(
			api.allusers,
			{ sort: '', page: page },
			config
		);

		console.log(data);

		const list = getState().allUsers.users;
		const users = page > 0 ? list.concat(data.user) : data.user;

		dispatch({
			type: 'ALL_USER_SUCCESS',
			payload: {
				users: users,
				count: data.count,
			},
		});
	} catch (error) {
		dispatch({
			type: 'ALL_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllUsersAction;
