import {
	getShippingAddressRequest,
	getShippingAddressSuccess,
	ISSERVER,
	shippingName,
} from '../storeConstants';

const addressFromStorage =
	!ISSERVER && localStorage.getItem(shippingName)
		? JSON.parse(localStorage.getItem(shippingName))
		: null;

const initialState =
	addressFromStorage != null
		? { address: addressFromStorage, loading: false }
		: { address: {}, loading: false };

const addressReducer = (state = initialState, action) => {
	switch (action.type) {
		case getShippingAddressRequest:
			return {
				loading: true,
				address: {},
			};
		case getShippingAddressSuccess:
			return {
				loading: false,
				address: action.payload,
			};

		default:
			return state;
	}
};

export default addressReducer;
