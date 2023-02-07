const initialState = { posts: [], post: {} };
import { FETCH_ALL_POST, FETCH_ALL_POSTS } from "../action/actionType";

export default postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS:
			return { ...state, posts: action.payload };
		case FETCH_ALL_POST:
			return { ...state, post: action.payload };
		default:
			return state;
	}
};
