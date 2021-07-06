import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const ISSERVER = typeof window === 'undefined';

const cartItemsFromStorage =
	!ISSERVER && localStorage.getItem('marncart')
		? JSON.parse(localStorage.getItem('marncart'))
		: [];

const tokenFromStorage =
	!ISSERVER && localStorage.getItem('marncart')
		? JSON.parse(localStorage.getItem('marncart'))
		: null;

const favItemsFromStorage =
	!ISSERVER && localStorage.getItem('marncart')
		? JSON.parse(localStorage.getItem('marncart'))
		: [];

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	token: tokenFromStorage,
	favItems: { favItems: favItemsFromStorage },
};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
