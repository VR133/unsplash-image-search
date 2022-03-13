import unsplash from '../utils/unsplash'
import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR} from '../constants/searchConstants'

export const search = (query, page = 1, perPage = 10) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_REQUEST
        })

        const data = await unsplash.search.getPhotos({
            query,
            page,
            perPage,
        })

        dispatch({
            type: SEARCH_SUCCESS,
            payload: {
                items: data.response.results,
                totalPages: data.response.total_pages,
            }
        })

    } catch (error) {
        dispatch({
            type: SEARCH_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}