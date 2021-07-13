import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer, subReducer } from './product';
import {
	loginReducer,
	signupReducer,
	userReducer,
	changePasswordReducer,
} from './userReducer';
import addressReducer from './addressReducer';
import { orderReducer, getOrdersReducer } from './order';
import searchReducer from './searchReducer';
import { getAllUserReducer } from './admin';
import { editOrderStatusReducer } from '../mix/editOrderStatus';
import { changeRoleReducer } from '../mix/editUserRole';

const rootReducer = combineReducers({
	auth: authReducer,
	signup: signupReducer,
	login: loginReducer,
	user: userReducer,
	password: changePasswordReducer,

	allUsers: getAllUserReducer,

	cart: cartReducer,
	address: addressReducer,

	search: searchReducer,
	product: productReducer,
	productList: productListReducer,
	sub: subReducer,

	order: orderReducer,
	orderList: getOrdersReducer,

	editOrderStatus: editOrderStatusReducer,
	changeRole: changeRoleReducer,
});

export default rootReducer;
