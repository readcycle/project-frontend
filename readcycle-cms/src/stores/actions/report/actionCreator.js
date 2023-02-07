import { REPORT_SOLVEDREPORT, REPORT_SETREPORTS } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export const fetchReports = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/reports", {
      headers: {
        access_token: localStorage.access_token,
      },
    })
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
          type: REPORT_SETREPORTS,
          payload: data,
        });
      });
  };
};

export const solveReports = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + "/reports/" + id, {
      method: "PATCH",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message);
        } else {
          return res.json();
        }
      })
      .then(() => {
        dispatch({
          type: REPORT_SOLVEDREPORT,
          payload: true,
        });
      });
  };
};
