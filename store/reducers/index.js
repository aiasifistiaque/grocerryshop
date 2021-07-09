import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';
import { loginReducer, signupReducer } from './userReducer';
import addressReducer from './addressReducer';
import { orderReducer, getOrdersReducer } from './order';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,

	cart: cartReducer,
	address: addressReducer,

	product: productReducer,
	productList: productListReducer,

	order: orderReducer,
	orderList: getOrdersReducer,
});

export default rootReducer;
