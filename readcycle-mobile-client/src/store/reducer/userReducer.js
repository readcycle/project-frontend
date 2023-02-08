const initialState = { users: [], user: {} };
import { FETCH_USER_DETAIL, FETCH_ALL_POSTS } from "../action/actionType";

export default userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_DETAIL:
			return { user: action.payload };
		default:
			return state;
	}
};
