const initialState = { books: [], book: {} };
import {FETCH_ALL_BOOK, FETCH_ALL_BOOKS} from '../action/actionType'

export default bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_BOOKS:
            return {...state, books:action.payload}
        case FETCH_ALL_BOOK:
            return {...state, book:action.payload}
        default:
            return state;
    }
};
