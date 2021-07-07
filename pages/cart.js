import React from 'react';
import HomePage from '../components/layout/HomePage/HomePage';
import CartOne from '../components/checkout/cart/CartOne';
import { useSelector } from 'react-redux';

const Cart = () => {
	const { cartItems } = useSelector(state => state.cart);
	return (
		<HomePage inv>
			<CartOne items={cartItems} />
		</HomePage>
	);
};

export default Cart;
