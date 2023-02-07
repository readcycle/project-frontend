import { POST_GETPOST, POST_SETPOSTS } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export const fetchPosts = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/posts", {})
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
          type: POST_SETPOSTS,
          payload: data,
        });
      });
  };
};
