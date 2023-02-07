import { USER_SETUSERS, USER_BANUSERS } from "../actions/userlist/actionTypes";

const initialState = {
  users: [],
  status: false,
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SETUSERS:
      return { ...state, users: action.payload };
    case USER_BANUSERS:
      return { ...state, status: action.payload };
    default:
      return state;
      break;
  }
};
