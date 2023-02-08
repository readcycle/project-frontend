const initialState = { chats: [], chat: {} };
import {FETCH_ALL_CHAT, FETCH_ALL_CHATS} from '../action/actionType'

export default chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_CHATS:
            return {...state, chats:action.payload}
        case FETCH_ALL_CHAT:
            return {...state, chat:action.payload}
        default:
            return state
    }
};
