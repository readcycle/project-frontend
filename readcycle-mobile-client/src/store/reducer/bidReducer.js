const initialState = { bids: [], bid: {} };
import { FETCH_ALL_BID, FETCH_ALL_BIDS, FETCH_ALL_BIDS_BY_ID } from "../action/actionType";

export default bidReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_BIDS_BY_ID:
			return { ...state, bidsById: action.payload };
		case FETCH_ALL_BIDS:
			return { ...state, bids: action.payload };
		default:
			return state;
	}
};
