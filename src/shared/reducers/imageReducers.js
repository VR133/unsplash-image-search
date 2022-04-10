import {
    LIKE_IMAGE_FAIL, LIKE_IMAGE_REQUEST, LIKE_IMAGE_SUCCESS,
    UNLIKE_IMAGE_FAIL, UNLIKE_IMAGE_REQUEST, UNLIKE_IMAGE_SUCCESS
} from '../constants/imageConstants'


export const likeImageReducer = (state = {}, action) => {
    switch (action.type) {
        case LIKE_IMAGE_REQUEST:
            return {loading: true}
        case LIKE_IMAGE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case LIKE_IMAGE_FAIL:
            return {loading: false, errors: action.payload}
        default:
            return state
    }
}

export const unlikeImageReducer = (state = {}, action) => {
    switch (action.type) {
        case UNLIKE_IMAGE_REQUEST:
            return {loading: true}
        case UNLIKE_IMAGE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case UNLIKE_IMAGE_FAIL:
            return {loading: false, errors: action.payload}
        default:
            return state
    }
}