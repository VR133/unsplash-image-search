import {USER_TOKEN_REQUEST, USER_TOKEN_SUCCESS, USER_TOKEN_FAIL} from '../constants/userConstants'

export const userTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_TOKEN_REQUEST:
            return {loading: true}
        case USER_TOKEN_SUCCESS:
            return {
                loading: false,
                success: true,
                accessToken: action.payload.access_token,
                refreshToken: action.payload.refresh_token,
                tokenType: action.payload.token_type
            }
        case USER_TOKEN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}