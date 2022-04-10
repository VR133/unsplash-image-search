import {getUserProfile, getUserTokenByCode} from '../actions/userActions'

const unsplashRedirectUri = `${window.location.origin}/callback/unsplash`;

const getUnsplashAuthURL = () => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    const redirectUri = unsplashRedirectUri
    const responseType = 'code'
    const scope = 'public+write_likes'

    return `https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`
}

const unsplashAuthHandler = async ({dispatch, locationSearchParams}) => {
    const code = locationSearchParams.get('code') || null

    if (code !== null) {
        await dispatch(getUserTokenByCode(code))
        await dispatch(getUserProfile())
    }
}

export {
    unsplashRedirectUri,
    getUnsplashAuthURL,
    unsplashAuthHandler,
}