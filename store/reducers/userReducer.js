//

import {
	loginRequest,
	loginSuccess,
	loginFail,
	signupRequest,
	signupSuccess,
	signupFail,
	logOut,
} from '../storeConstants';

export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case loginRequest:
			return { loading: true };
		case loginSuccess:
			return { loading: false, token: action.payload };
		case loginFail:
			return { loading: false, error: action.payload };
		case logOut:
			return {};
		default:
			return { loading: false };
	}
};

export const signupReducer = (state = {}, action) => {
	switch (action.type) {
		case signupRequest:
			return { loading: true };
		case signupSuccess:
			return { loading: false };
		case signupFail:
			return { loading: false, error: action.payload };

		default:
			return { loading: false };
	}
};
