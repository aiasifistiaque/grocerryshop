import HomePage from '../../components/layout/HomePage/HomePage';
import CartOne from '../../components/checkout/cart/CartOne';
import { useSelector } from 'react-redux';
import CartBanner from '../../components/checkout/banner/CartBanner';
import { useRouter } from 'next/dist/client/router';
import Shipping from '../../components/checkout/shipping/Shipping';
import Payment from '../../components/checkout/payment/Payment';
import Confirm from '../../components/checkout/confirm/Confirm';
import { useEffect, useState } from 'react';
import PageLoading from '../../components/core/pageloading/PageLoading';

const Cart = () => {
	const { cartItems } = useSelector(state => state.cart);
	const router = useRouter();
	const { id } = router.query;
	const { loggedIn } = useSelector(state => state.auth);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id == 'shipping' || id == 'payment' || id == 'confirmation') {
			if (!loggedIn) {
				router.replace('/');
			} else {
				setLoading(false);
			}
		} else {
			if (id == 'cart') {
				setLoading(false);
			}
		}
		setLoading(false);
	}, [loggedIn, id]);
	return (
		<HomePage inv>
			{loading ? (
				<PageLoading />
			) : (
				<>
					<CartBanner select={id} />
					{id == 'cart' && <CartOne items={cartItems} />}
					{id == 'shipping' && <Shipping items={cartItems} />}
					{id == 'payment' && <Payment items={cartItems} />}
					{id == 'confirmation' && <Confirm items={cartItems} />}
				</>
			)}
		</HomePage>
	);
};

export default Cart;
