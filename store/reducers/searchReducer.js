import { searchRequest, searchSuccess, searchFail } from '../storeConstants';

const searchReducer = (state = { products: [], loading: false }, action) => {
	switch (action.type) {
		case searchRequest:
			return { loading: true };
		case searchSuccess:
			return {
				loading: false,
				products: action.payload,
			};
		case searchFail:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export default searchReducer;
