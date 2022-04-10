import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR} from '../constants/searchConstants'

export const searchReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {loading: true, items: []}
        case SEARCH_SUCCESS:
            return {loading: false, success: true, items: action.payload.items, totalPages: action.payload.totalPages
            }
        case SEARCH_ERROR:
            return {loading: false, errors: action.payload, items: []}
        default:
            return state
    }
}