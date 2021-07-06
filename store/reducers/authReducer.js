import { logIn, logOut } from '../storeConstants';

const initialState = { token: '', loggedIn: false };

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case logIn:
			state.token = action.payload.token;
			state.loggedIn = true;
			return state;
		case logOut:
			state.token = '';
			state.loggedIn = false;
			return state;
		default:
			return state;
	}
};

export default authReducer;
