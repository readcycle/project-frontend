import { POST_SETPOSTS, POST_GETPOST } from "../actions/post/actionTypes";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SETPOSTS:
      return { ...state, posts: action.payload };
      break;
    default:
      return state;
      break;
  }
};
