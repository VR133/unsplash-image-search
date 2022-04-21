import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL,
    SEARCH_QUERY_ADD_NEW
} from '../constants/searchConstants'
import axios from 'axios';

export const search = (query, page = 1, perPage = 10) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SEARCH_REQUEST
        })

        dispatch({
            type: SEARCH_QUERY_ADD_NEW,
            payload: query
        })

        const {userToken} = getState()

        let config = {
            headers: {
                Authorization: userToken
                    ? `${userToken.tokenType} ${userToken.accessToken}`
                    : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params: {
                query,
                page,
                perPage,
            }
        }

        const {data} = await axios.get('/search/photos', config)

        dispatch({
            type: SEARCH_SUCCESS,
            payload: {
                items: data.results,
                totalPages: data.total_pages,
            }
        })

    } catch (error) {
        dispatch({
            type: SEARCH_FAIL,
            payload: error.response && error.response.data.errors ? error.response.data.errors : error.message
        })
    }
}