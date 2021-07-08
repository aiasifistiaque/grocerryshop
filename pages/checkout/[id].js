import HomePage from '../../components/layout/HomePage/HomePage';
import CartOne from '../../components/checkout/cart/CartOne';
import { useSelector } from 'react-redux';
import CartBanner from '../../components/checkout/banner/CartBanner';
import { useRouter } from 'next/dist/client/router';
import Shipping from '../../components/checkout/shipping/Shipping';

const Cart = () => {
	const { cartItems } = useSelector(state => state.cart);
	const router = useRouter();
	const { id } = router.query;

	return (
		<HomePage inv>
			<CartBanner select={id} />
			{id == 'cart' && <CartOne items={cartItems} />}
			{id == 'shipping' && <Shipping items={cartItems} />}
		</HomePage>
	);
};

export default Cart;
