import { BOOK_SETBOOKS, BOOK_GETBOOK } from "../actions/book/actionTypes";

const initialState = {
  books: [],
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_SETBOOKS:
      return { ...state, books: action.payload };
      break;
    default:
      return state;
      break;
  }
};
