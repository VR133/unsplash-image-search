import axios from 'axios'
import {
    LIKE_IMAGE_FAIL, LIKE_IMAGE_REQUEST, LIKE_IMAGE_SUCCESS,
    UNLIKE_IMAGE_FAIL, UNLIKE_IMAGE_REQUEST, UNLIKE_IMAGE_SUCCESS
} from '../constants/imageConstants'
import {SEARCH_UPDATE_ITEM} from '../constants/searchConstants'

export const like = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIKE_IMAGE_REQUEST
        })

        const {userToken: {accessToken, tokenType}} = getState()

        const config = {
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            },
        }

        const {data} = await axios.post(`/photos/${id}/like`, {}, config)

        dispatch({
            type: LIKE_IMAGE_SUCCESS,
        })

        dispatch({
            type: SEARCH_UPDATE_ITEM,
            payload: data.photo
        })

    } catch (error) {
        dispatch({
            type: LIKE_IMAGE_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}

export const unlike = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UNLIKE_IMAGE_REQUEST
        })

        const {userToken: {accessToken, tokenType}} = getState()

        const config = {
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            },
        }

        const {data} = await axios.delete(`/photos/${id}/like`, config)

        dispatch({
            type: UNLIKE_IMAGE_SUCCESS,
        })

        dispatch({
            type: SEARCH_UPDATE_ITEM,
            payload: data.photo
        })
    } catch (error) {
        dispatch({
            type: UNLIKE_IMAGE_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}