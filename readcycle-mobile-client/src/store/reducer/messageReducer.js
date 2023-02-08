const initialState = { messages: [], message: {} };
import {
	FETCH_MESSAGE,
	FETCH_MESSAGE_BY_ID,
	CREATE_MESSAGE,
} from "../action/actionType";

export default messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MESSAGE:
			return { ...state, messages: action.payload };
		case FETCH_MESSAGE_BY_ID:
			return { ...state, message: action.payload };
		case CREATE_MESSAGE:
			return { ...state, messages: state.messages.concat(action.payload) };
		default:
			return state;
	}
};
