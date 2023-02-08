const initialState = { chats: [], chat: {} };
import {FETCH_CHAT, FETCH_CHAT_BY_ID, CREATE_CHAT} from '../action/actionType'

export default chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHAT:
            return {...state, chats:action.payload}
        case FETCH_CHAT_BY_ID:
            return {...state, chat:action.payload}
        case CREATE_CHAT:
            return {...state, chats: state.chats.concat(action.payload)}
        default:
            return state
    }
};
