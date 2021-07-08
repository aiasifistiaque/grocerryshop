import { shippingName, getShippingAddressSuccess } from '../../storeConstants';

const addAddressAction = address => async dispatch => {
	dispatch({
		type: getShippingAddressSuccess,
		payload: address,
	});
	localStorage.setItem(shippingName, JSON.stringify(address));
};

export default addAddressAction;
