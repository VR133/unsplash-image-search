import {createApi} from "unsplash-js"

const unsplash = new createApi({
    apiUrl: 'https://api.unsplash.com/',
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
})

export default unsplash