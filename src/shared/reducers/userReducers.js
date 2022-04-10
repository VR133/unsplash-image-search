import {
    USER_TOKEN_REQUEST, USER_TOKEN_SUCCESS, USER_TOKEN_FAIL,
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL
} from '../constants/userConstants'
import {deleteFromLocalStorage, saveToLocalStorage} from '../utils/localStorage'

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

            return {loading: true}
        case USER_PROFILE_SUCCESS:
            saveToLocalStorage('userProfile', {
                firstName: action.payload.firstName
            })

            return {
                loading: false,
                firstName: action.payload.firstName
            }
        case USER_PROFILE_FAIL:
            deleteFromLocalStorage('userToken')

            return {loading: false, errors: action.payload}
        default:
            return state
    }
}