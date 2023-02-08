// Post
// User
// Genre
// Bids
// Books
// CHats

import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";
import bidReducer from "./bidReducer";
import genreReducer from "./genreReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	genre: genreReducer,
	post: postReducer,
    user: userReducer,
	bid: bidReducer
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default rootReducer;
