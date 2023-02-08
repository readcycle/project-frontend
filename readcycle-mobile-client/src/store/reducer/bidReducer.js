const initialState = { bids: [], bidsById: [], bidsByPost: [] };
import {
	FETCH_ALL_BIDS,
	FETCH_ALL_BIDS_BY_ID,
	FETCH_ALL_BIDS_BY_POST,
} from "../action/actionType";

export default bidReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_BIDS_BY_ID:
			return { ...state, bidsById: action.payload };
		case FETCH_ALL_BIDS:
			return { ...state, bids: action.payload };
		case FETCH_ALL_BIDS_BY_POST:
			return { ...state, bidsByPost: action.payload };
		default:
			return state;
	}
};
