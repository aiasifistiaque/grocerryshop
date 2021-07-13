import axios from 'axios';
import { tokenName } from '../storeConstants';
import { api } from '../../constants';

const startRoleEdit = 'START_USER_ROLE_EDIT';
const cancelRoleEdit = 'CANCEL_USER_ROLE_EDIT';
const changeRoleValue = 'CHANGE_ROLE_VALUE';
const changeRoleRequest = 'EDIT_ROLE_REQUEST';
const changeRoleSuccess = 'EDIT_ROLE_SUCCESS';
const changeRoleFail = 'EDIT_ROLE_FAIL';

const roleValues = ['user', 'admin'];

export const changeRoleReducer = (
	state = { edit: false, loading: false, values: roleValues, value: '' },
	action
) => {
	switch (action.type) {
		case startRoleEdit:
			return { ...state, edit: true };
		case cancelRoleEdit:
			return { ...state, edit: false };
		case changeRoleValue:
			return { ...state, value: action.payload };
		case changeRoleRequest:
			return { ...state, loading: true };
		case changeRoleSuccess:
			return {
				...state,
				loading: false,
				edit: false,
				value: action.payload.value,
				success: true,
			};
		case changeRoleFail:
			return { ...state, loading: false, error: true, edit: false };

		default:
			return state;
	}
};

export const startRoleEditAction = () => async dispatch => {
	dispatch({ type: startRoleEdit });
};

export const cancelRoleEditAction = () => async dispatch => {
	dispatch({ type: cancelRoleEdit });
};

export const changeRoleValueAction = value => async dispatch => {
	dispatch({ type: changeRoleValue, payload: value });
};

export const changeRoleAction = id => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));
	const value = getState().changeRole.value;

	try {
		dispatch({ type: changeRoleRequest });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		console.log('id/value', id, value);

		const { data } = await axios.post(
			api.editRole,
			{
				id: id,
				role: value,
			},
			config
		);

		dispatch({ type: changeRoleSuccess, payload: { value: value } });
	} catch (error) {
		console.log(error);
		dispatch({
			type: changeRoleFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
