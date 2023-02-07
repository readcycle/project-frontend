import { REPORT_SETREPORTS, REPORT_GETREPORT } from "../actions/report/actionTypes";

const initialState = {
  reports: [],
};

export const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_SETREPORTS:
      return { ...state, reports: action.payload };
      break;
    default:
      return state;
      break;
  }
};
