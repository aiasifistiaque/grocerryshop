import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { productListReducer, productReducer } from './product';

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	productList: productListReducer,
	product: productReducer,
});

export default rootReducer;
