import { BOOK_GETBOOK, BOOK_SETBOOKS } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export const fetchBooks = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/books", {})
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        dispatch({
          type: BOOK_SETBOOKS,
          payload: data,
        });
      });
  };
};
