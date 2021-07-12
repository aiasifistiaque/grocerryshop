import {
	getProductListRequest,
	getProductListSuccess,
	getProductListFail,
	getProductRequest,
	getProductSuccess,
	getProductFail,
	getSubRequest,
	getSubSuccess,
	getSubFail,
} from '../storeConstants';

export const productListReducer = (
	state = { products: [], loading: true },
	action
) => {
	switch (action.type) {
		case getProductListRequest:
			return { ...state, loading: true };
		case getProductListSuccess:
			return {
				loading: false,
				products: action.payload.data,
				end: action.payload.end,
			};
		case getProductListFail:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const productReducer = (
	state = { product: {}, loading: true },
	action
) => {
	switch (action.type) {
		case getProductRequest:
			return { loading: true, product: {} };
		case getProductSuccess:
			return {
				loading: false,
				product: action.payload,
			};
		case getProductFail:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const subReducer = (state = { sub: [], loading: true }, action) => {
	switch (action.type) {
		case getSubRequest:
			return { sub: [], loading: true };
		case getSubSuccess:
			return {
				loading: false,
				sub: action.payload,
			};
		case getSubFail:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
