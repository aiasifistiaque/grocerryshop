import axios from 'axios';
import {
	tokenName,
	editProfileSuccess,
	editProfileFail,
	getProductSuccess,
} from '../storeConstants';
import { api } from '../../constants';

const startProductEdit = 'START_PRODUCT_EDIT';
const cancelProductEdit = 'CANCEL_PRODUCT_EDIT';
const changeRoleValue = 'CHANGE_ROLE_VALUE';
const editProductRequest = 'EDIT_PRODUCT_REQUEST';
const editProductSuccess = 'EDIT_PRODUCT_SUCCESS';
const editProductFail = 'EDIT_PRODUCT_FAIL';

const roleValues = ['user', 'admin'];

export const editProductReducer = (
	state = { edit: false, loading: false },
	action
) => {
	switch (action.type) {
		case startProductEdit:
			return { ...state, edit: true };
		case cancelProductEdit:
			return { ...state, edit: false };
		case changeRoleValue:
			return { ...state, value: action.payload };
		case editProductRequest:
			return { ...state, loading: true };
		case editProductSuccess:
			return {
				...state,
				loading: false,
				edit: false,
				success: true,
			};
		case editProfileFail:
			return { ...state, loading: false, error: true, edit: false };

		default:
			return state;
	}
};

export const startProductEditAction = () => async dispatch => {
	dispatch({ type: startProductEdit });
};

export const cancelProductEditAction = () => async dispatch => {
	dispatch({ type: cancelProductEdit });
};

// export const changeRoleValueAction = value => async dispatch => {
// 	dispatch({ type: changeRoleValue, payload: value });
// };

export const editProductAction = product => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));

	try {
		dispatch({ type: editProductRequest });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.put(
			`${api.products}/${product._id}`,
			product,
			config
		);
		console.log(data);
		dispatch({ type: editProductSuccess, payload: data });
		dispatch({ type: getProductSuccess, payload: data });
	} catch (error) {
		console.log(error);
		dispatch({
			type: editProductFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
