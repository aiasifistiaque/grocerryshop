import { cartName, emptyCart } from '../../storeConstants';

const emptyCartAction = id => (dispatch, getState) => {
	dispatch({
		type: emptyCart,
		payload: id,
	});

	localStorage.setItem(cartName, JSON.stringify([]));
};

export default emptyCartAction;
