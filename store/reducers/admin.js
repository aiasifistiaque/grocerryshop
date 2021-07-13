export const getAllUserReducer = (state = { users: [], count: 0 }, action) => {
	switch (action.type) {
		case 'ALL_USER_REQUEST':
			return { ...state, loading: true, count: 0 };
		case 'ALL_USER_SUCCESS':
			return {
				loading: false,
				users: action.payload.users,
				count: action.payload.count,
			};
		case 'ALL_USER_FAIL':
			return { loading: false, users: action.payload };

		default:
			return state;
	}
};
