import {
	createOrderRequest,
	createOrderFail,
	createOrderSuccess,
	getOrderRequest,
	getOrderSuccess,
	getOrderFail,
} from '../storeConstants';

//get single order
export const orderReducer = (
	state = { order: {}, loading: false, success: false },
	action
) => {
	switch (action.type) {
		case createOrderRequest:
			return { loading: true, order: {}, success: false };
		case createOrderSuccess:
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		case createOrderFail:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

//get multiple order
export const getOrdersReducer = (
	state = { orders: [], loading: false, success: false, count: 0 },
	action
) => {
	switch (action.type) {
		case getOrderRequest:
			return { ...state, loading: true, success: false, count: 0 };
		case getOrderSuccess:
			return {
				orders: action.payload.orders,
				count: action.payload.count,
				loading: false,
				success: true,
			};
		case getOrderFail:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
