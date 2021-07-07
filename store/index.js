import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartName, tokenName } from './storeConstants';

export const ISSERVER = typeof window === 'undefined';

const cartItemsFromStorage =
	!ISSERVER && localStorage.getItem(cartName)
		? JSON.parse(localStorage.getItem(cartName))
		: [];

const cartTotal =
	!ISSERVER && localStorage.getItem(cartName)
		? JSON.parse(localStorage.getItem(cartName))
		: [];

const tokenFromStorage =
	!ISSERVER && localStorage.getItem(tokenName)
		? JSON.parse(localStorage.getItem(tokenName))
		: null;

const favItemsFromStorage =
	!ISSERVER && localStorage.getItem('marnfav')
		? JSON.parse(localStorage.getItem('marnfav'))
		: [];

const loginState = {
	isLogged: false,
};

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	authState: {
		token: tokenFromStorage,
	},

	favItems: { favItems: favItemsFromStorage },
	logInfo: loginState,
};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
