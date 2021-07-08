import {
	getProductListRequest,
	getProductListSuccess,
	getProductListFail,
	getProductRequest,
	getProductSuccess,
	getProductFail,
} from '../storeConstants';

export const productListReducer = (
	state = { products: [], loading: true },
	action
) => {
	switch (action.type) {
		case getProductListRequest:
			return { loading: true, products: [] };
		case getProductListSuccess:
			return {
				loading: false,
				products: action.payload,
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