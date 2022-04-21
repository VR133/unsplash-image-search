import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {searchQueryReducer, searchReducer} from './shared/reducers/searchReducers'
import {userLikesReducer, userProfileReducer, userTokenReducer} from './shared/reducers/userReducers'
import {likeImageReducer, unlikeImageReducer} from './shared/reducers/imageReducers'
import {getFromLocalStorage} from './shared/utils/localStorage'

const reducer = combineReducers({
    search: searchReducer,
    searchQuery: searchQueryReducer,
    userToken: userTokenReducer,
    userProfile: userProfileReducer,
    likeImage: likeImageReducer,
    unlikeImage: unlikeImageReducer,
    userLikes: userLikesReducer,
})

const initialState = {
    userToken: getFromLocalStorage('userToken'),
    userProfile: getFromLocalStorage('userProfile'),
    searchQuery: {
        items: getFromLocalStorage('searchQueryItems') ?? []
    },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store