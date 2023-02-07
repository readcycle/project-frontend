const initialState = { genres: [] };
import { FETCH_ALL_GENRES } from "../action/actionType";

export default genreReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_GENRES:
			return { genres: action.payload };
		default:
			return state;
	}
};
