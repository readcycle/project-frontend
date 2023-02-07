import { bookReducer } from "./reducers/bookReducer";
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/postReducer";
import { reportReducer } from "./reducers/reportReducer";
import { userListReducer } from "./reducers/userListReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  post: postReducer,
  report: reportReducer,
  user: userListReducer,
  loading: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
