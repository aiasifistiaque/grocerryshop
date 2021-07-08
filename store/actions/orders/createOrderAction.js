//

import { api } from '../../../constants';
import axios from 'axios';
import {
	tokenName,
	createOrderRequest,
	createOrderFail,
	createOrderSuccess,
} from '../../storeConstants';
import emptyCartAction from '../../actions/cart/emptyCartAction';

const createOrderAction = address => async (dispatch, getState) => {
	try {
		dispatch({
			type: createOrderRequest,
		});

		const token = JSON.parse(localStorage.getItem(tokenName));
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const cartItems = getState().cart.cartItems;
		const total = cartItems.reduce((total, arr) => arr.totalPrice + total, 0);

		const { data } = await axios.post(
			api.order,
			{
				orderItems: cartItems,
				shippingAddress: address,
				paymentMethod: 'cash',
				vat: 0,
				shippingPrice: 0,
				itemPrice: total,
				totalPrice: total,
			},
			config
		);

		dispatch({
			type: createOrderSuccess,
			payload: data,
		});
		dispatch(emptyCartAction());
	} catch (error) {
		dispatch({
			type: createOrderFail,
			payload:
				error.response && error.response.data
					? error.response.data
					: error.message,
		});
	}
};

export default createOrderAction;
