import { cartName, removeCartItem } from '../../storeConstants';

const removeFromCartAction = id => (dispatch, getState) => {
	dispatch({
		type: removeCartItem,
		payload: id,
	});

	localStorage.setItem(cartName, JSON.stringify(getState().cart.cartItems));
};

export default removeFromCartAction;
