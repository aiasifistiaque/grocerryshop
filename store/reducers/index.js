import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';
import { loginReducer, signupReducer } from './userReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,
	cart: cartReducer,
	productList: productListReducer,
	product: productReducer,
});

export default rootReducer;
