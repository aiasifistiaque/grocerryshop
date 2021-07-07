import { addCartItem, removeCartItem, emptyCart } from '../storeConstants';

const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case addCartItem:
			const item = action.payload;
			const existItem = state.cartItems.find(x => x._id === item._id);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map(x =>
						x._id === existItem._id ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case removeCartItem:
			return {
				...state,
				cartItems: state.cartItems.filter(x => x._id !== action.payload),
			};

		case emptyCart:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
