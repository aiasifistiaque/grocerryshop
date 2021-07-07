import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**Takes id of the item
 * returns if in cart
 */
const useInCart = id => {
	const { cartItems } = useSelector(state => state.cart);
	const [inCart, setInCart] = useState(false);
	const [item, setItem] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const index = cartItems.findIndex(item => item._id === id);
		if (index == -1) {
			setInCart(false);
			setLoading(false);
		} else {
			const item = cartItems[index];
			setItem(item);
			setInCart(true);
			setLoading(false);
		}
	}, [cartItems]);

	return { item, loading, inCart };
};

export default useInCart;
