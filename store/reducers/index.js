import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';
import { loginReducer, signupReducer, userReducer } from './userReducer';
import addressReducer from './addressReducer';
import { orderReducer, getOrdersReducer } from './order';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,
	user: userReducer,

	cart: cartReducer,
	address: addressReducer,

	product: productReducer,
	productList: productListReducer,

	order: orderReducer,
	orderList: getOrdersReducer,
});

export default rootReducer;
