import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_UPDATE_ITEM,
    SEARCH_QUERY_ADD_NEW
} from '../constants/searchConstants'
import {saveToLocalStorage} from '../utils/localStorage';

export const searchReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {loading: true, items: []}
        case SEARCH_SUCCESS:
            return {loading: false, success: true, items: action.payload.items, totalPages: action.payload.totalPages}
        case SEARCH_UPDATE_ITEM:
            const item = action.payload

            return {
                ...state,
                items: state.items.map(x => x.id === item.id ? {
                    ...x,
                    liked_by_user: item.liked_by_user
                } : x)
            }
        case SEARCH_FAIL:
            return {loading: false, errors: action.payload, items: []}
        default:
            return state
    }
}

export const searchQueryReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case SEARCH_QUERY_ADD_NEW:

            let items = state.items
            const existingQuery = items.find(q => q === action.payload)

            if (existingQuery !== undefined) {
                items = items.filter(q => q !== existingQuery)
            } else if (items.length === 5) {
                items.pop()
            }

            items.unshift(action.payload)

            saveToLocalStorage('searchQueryItems', items)

            return {
                items
            }
        default:
            return state
    }
}