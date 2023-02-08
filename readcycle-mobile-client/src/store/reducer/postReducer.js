const initialState = { posts: [], post: {}, myPosts:[] };
import { FETCH_ALL_POST, FETCH_ALL_POSTS, FETCH_MY_POSTS } from "../action/actionType";

export default postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS:
			return { ...state, posts: action.payload };
		case FETCH_ALL_POST:
			return { ...state, post: action.payload };
		case FETCH_MY_POSTS:
			return { ...state, myPosts: action.payload };
		default:
			return state;
	}
};
