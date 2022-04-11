import {
    USER_TOKEN_REQUEST, USER_TOKEN_SUCCESS, USER_TOKEN_FAIL,
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL,
    USER_LIKES_REQUEST, USER_LIKES_SUCCESS, USER_LIKES_FAIL, USER_LIKES_UPDATE
} from '../constants/userConstants'
import {deleteFromLocalStorage, saveToLocalStorage} from '../utils/localStorage'
import {SEARCH_UPDATE_ITEM} from '../constants/searchConstants';

export const userTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_TOKEN_REQUEST:
            deleteFromLocalStorage('userToken')

            return {loading: true}
        case USER_TOKEN_SUCCESS:
            saveToLocalStorage('userToken', {
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                tokenType: action.payload.tokenType
            })

            return {
                loading: false,
                success: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                tokenType: action.payload.tokenType
            }
        case USER_TOKEN_FAIL:
            return {loading: false, errors: action.payload}
        default:
            return state
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            deleteFromLocalStorage('userProfile')

            return {...state, loading: true}
        case USER_PROFILE_SUCCESS:
            saveToLocalStorage('userProfile', {
                username: action.payload.username,
                firstName: action.payload.firstName
            })

            return {
                loading: false,
                username: action.payload.username,
                firstName: action.payload.firstName
            }
        case USER_PROFILE_FAIL:
            deleteFromLocalStorage('userToken')

            return {loading: false, errors: action.payload}
        default:
            return state
    }
}

export const userLikesReducer = (state = {likes: []}, action) => {
    switch (action.type) {
        case USER_LIKES_REQUEST:
            return {...state, loading: true}
        case USER_LIKES_SUCCESS:
            return {...state, loading: false, likes: action.payload}
        case USER_LIKES_FAIL:
            return {...state, loading: false, errors: action.payload}
        case USER_LIKES_UPDATE:
            const item = action.payload
            return {
                ...state,
                likes: state.likes.map(x => x.id === item.id ? {
                    ...x,
                    liked_by_user: item.liked_by_user
                } : x)
            }
        default:
            return state
    }
}