const baseUrl = "http://localhost:3000";

export const loginUser = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/admins/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      } else {
        return res.json();
      }
    });
  };
};

export const addUser = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/admins/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      } else {
        return res.json();
      }
    });
  };
};
