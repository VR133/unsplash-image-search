import axios from 'axios'
import {
    USER_TOKEN_REQUEST, USER_TOKEN_SUCCESS, USER_TOKEN_FAIL,
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL,
    USER_LIKES_REQUEST, USER_LIKES_SUCCESS, USER_LIKES_FAIL
} from '../constants/userConstants'
import {unsplashRedirectUri} from '../utils/unsplash'

export const getUserTokenByCode = (code) => async (dispatch) => {
    try {
        dispatch({
            type: USER_TOKEN_REQUEST
        })

        const {data} = await axios({
            url: '/oauth/token',
            method: 'POST',
            baseURL: process.env.REACT_APP_UNSPLASH_URL,
            data: {
                client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
                client_secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY,
                redirect_uri: unsplashRedirectUri,
                code: code,
                grant_type: 'authorization_code'
            }
        })

        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: {
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                tokenType: data.token_type,
            }
        })

    } catch (error) {
        dispatch({
            type: USER_TOKEN_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        })

        const {userToken: {accessToken, tokenType}} = getState()

        const config = {
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            },
        }

        const {data} = await axios.get('/me', config)

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: {
                username: data.username,
                firstName: data.first_name,
            }
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}

export const getUserLikes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIKES_REQUEST
        })

        const {userToken: {accessToken, tokenType}, userProfile: {username}} = getState()

        const config = {
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            },
        }

        const {data} = await axios.get(`/users/${username}/likes`, config)

        dispatch({
            type: USER_LIKES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LIKES_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}