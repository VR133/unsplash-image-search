import axios from 'axios'
import {USER_TOKEN_REQUEST, USER_TOKEN_SUCCESS, USER_TOKEN_FAIL} from '../constants/userConstants'
import {unsplashRedirectUri} from '../utils/unsplash'
import {saveToLocalStorage} from '../utils/localStorage';

export const getUserTokenByCode = (code) => async (dispatch) => {
    try {
        dispatch({
            type: USER_TOKEN_REQUEST
        })

        const {data} = await axios.post('/oauth/token', {
            client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
            client_secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY,
            redirect_uri: unsplashRedirectUri,
            code: code,
            grant_type: 'authorization_code'
        })

        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: {
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                token_type: data.token_type,
            }
        })

        saveToLocalStorage('userToken', {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            token_type: data.token_type,
        })

    } catch (error) {
        dispatch({
            type: USER_TOKEN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}