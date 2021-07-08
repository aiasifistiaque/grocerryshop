import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';
import { loginReducer, signupReducer } from './userReducer';
import addressReducer from './addressReducer';
import { orderReducer } from './order';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,
	cart: cartReducer,
	productList: productListReducer,
	product: productReducer,
	address: addressReducer,
	order: orderReducer,
});

export default rootReducer;
