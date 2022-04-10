import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_UPDATE_ITEM} from '../constants/searchConstants'

export const searchReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {loading: true, items: []}
        case SEARCH_SUCCESS:
            return {loading: false, success: true, items: action.payload.items, totalPages: action.payload.totalPages}
        case SEARCH_UPDATE_ITEM:
            const item = action.payload

            console.log(state.items)

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