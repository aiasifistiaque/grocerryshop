import { addCartItem, cartName } from '../../storeConstants';

const addToCartAction = (product, qty = 1) => async (dispatch, getState) => {
	dispatch({
		type: addCartItem,
		payload: {
			_id: product._id,
			name: product.name,
			image: product.image,
			totalPrice: product.price * qty,
			price: product.price,
			countInStock: product.countInStock,
			qty,
		},
	});

	localStorage.setItem(cartName, JSON.stringify(getState().cart.cartItems));
};

export default addToCartAction;
