import axios from 'axios';
import { tokenName, createOrderSuccess } from '../storeConstants';
import { api } from '../../constants';

const startEdit = 'START_ORDER_STATUS_EDIT';
const cancelEdit = 'CANCEL_ORDER_STATUS_EDIT';
const changeOrderStatusValue = 'CHANGE_ORDER_STATUS_VALUE';
const editOrderRequest = 'EDIT_ORDER_REQUEST';
const editOrderSuccess = 'EDIT_ORDER_SUCCESS';
const editOrderFail = 'EDIT_ORDER_FAIL';

const orderStatusValues = [
	'order placed',
	'confirmed',
	'ready for shipping',
	'shipped',
	'delivered',
	'completed',
	'archived',
	'cancelled',
];

export const editOrderStatusReducer = (
	state = { edit: false, loading: false, values: orderStatusValues, value: '' },
	action
) => {
	switch (action.type) {
		case startEdit:
			return { ...state, edit: true };
		case cancelEdit:
			return { ...state, edit: false };
		case changeOrderStatusValue:
			return { ...state, value: action.payload };
		case editOrderRequest:
			return { ...state, loading: true };
		case editOrderSuccess:
			return {
				...state,
				loading: false,
				edit: false,
				value: action.payload.status,
				success: true,
			};
		case editOrderFail:
			return { ...state, loading: false, error: true, edit: false };

		default:
			return state;
	}
};

export const startOrderStatusEdit = () => async dispatch => {
	dispatch({ type: startEdit });
};

export const cancelOrderStatusEdit = () => async dispatch => {
	dispatch({ type: cancelEdit });
};

export const setOrderStatusValue = value => async dispatch => {
	dispatch({ type: changeOrderStatusValue, payload: value });
};

export const editOrderAction = order => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem(tokenName));
	const value = getState().editOrderStatus.value;

	try {
		dispatch({ type: editOrderRequest });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.put(
			api.order,
			{
				id: order._id,
				status: value || order.status,
				paid: false,
			},
			config
		);

		dispatch({ type: editOrderSuccess, payload: { value: data.status } });
		dispatch({
			type: createOrderSuccess,
			payload: data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: editOrderFail,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default editOrderAction;
