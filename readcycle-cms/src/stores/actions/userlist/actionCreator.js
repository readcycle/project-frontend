import { USER_SETUSERS, USER_BANUSERS } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export const fetchUsers = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/users", {})
      .then((res) => {
        if (!res.ok) {
          // const error = await res.json();
          throw new Error("ada error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        dispatch({
          type: USER_SETUSERS,
          payload: data,
        });
      });
  };
};

export const banUser = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/users/" + id, {
      method: "PATCH",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          // const error = await res.json();
          throw new Error("ada error");
        } else {
          return res.json();
        }
      })
      .then(() => {
        dispatch({
          type: USER_BANUSERS,
          payload: true,
        });
      });
  };
};
