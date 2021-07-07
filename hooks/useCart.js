import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * returns count
 * and total price
 */
const useCart = id => {
	const { cartItems } = useSelector(state => state.cart);
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const totalItems = cartItems.reduce((total, arr) => arr.qty + total, 0);
		const totalAmount = cartItems.reduce(
			(total, arr) => arr.totalPrice + total,
			0
		);
		setCount(totalItems);
		setTotal(totalAmount);
	}, [cartItems]);

	return { total, count };
};

export default useCart;
