//

import {
	loginRequest,
	loginSuccess,
	loginFail,
	signupRequest,
	signupSuccess,
	signupFail,
	logOut,
	getProfileRequest,
	getProfileSuccess,
	getProfileFail,
	editProfileRequest,
	editProfileFail,
	editProfileSuccess,
	changePasswordRequest,
	changePasswordSuccess,
	changePasswordFail,
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

export const userReducer = (state = { user: {}, loading: false }, action) => {
	switch (action.type) {
		case getProfileRequest:
			return { loading: true };
		case getProfileSuccess:
			return { user: action.payload, loading: false };
		case getProfileFail:
			return { loading: false, error: action.payload };
		case editProfileRequest:
			return { loading: true, edit: 2 };
		case editProfileSuccess:
			return { user: action.payload, loading: false, edit: 1 };
		case editProfileFail:
			return { loading: false, error: action.payload, edit: 0 };

		default:
			return state;
	}
};

export const changePasswordReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case changePasswordRequest:
			return { loading: true };
		case changePasswordSuccess:
			return { success: true, loading: false };
		case changePasswordFail:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
