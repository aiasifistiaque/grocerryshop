import {
	createOrderRequest,
	createOrderFail,
	createOrderSuccess,
} from '../storeConstants';

//
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
