import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';
import {
	loginReducer,
	signupReducer,
	userReducer,
	changePasswordReducer,
} from './userReducer';
import addressReducer from './addressReducer';
import { orderReducer, getOrdersReducer } from './order';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,
	user: userReducer,
	password: changePasswordReducer,

	cart: cartReducer,
	address: addressReducer,

	search: searchReducer,
	product: productReducer,
	productList: productListReducer,

	order: orderReducer,
	orderList: getOrdersReducer,
});

export default rootReducer;
