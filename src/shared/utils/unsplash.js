import {createApi} from 'unsplash-js'
import {getUserTokenByCode} from '../actions/userActions'

const unsplash = new createApi({
    apiUrl: process.env.REACT_APP_UNSPLASH_API_URL,
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
})

const unsplashRedirectUri = `${window.location.origin}/callback/unsplash`;

const getUnsplashAuthURL = () => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    const redirectUri = unsplashRedirectUri
    const responseType = 'code'
    const scope = 'public'

    return `https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`
}

const unsplashAuthHandler = ({dispatch}) => {

    const locationSearchParams = new URLSearchParams(window.location.search)
    const code = locationSearchParams.get('code') || null

    if (code !== null) {
        dispatch(getUserTokenByCode(code))
    }

    window.location.href = '/'
}

export {
    unsplash,
    unsplashRedirectUri,
    getUnsplashAuthURL,
    unsplashAuthHandler,
}