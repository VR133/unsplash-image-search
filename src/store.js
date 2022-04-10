import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {searchReducer} from './shared/reducers/searchReducers'
import {userProfileReducer, userTokenReducer} from './shared/reducers/userReducers'
import {getFromLocalStorage} from './shared/utils/localStorage'

const reducer = combineReducers({
    search: searchReducer,
    userToken: userTokenReducer,
    userProfile: userProfileReducer,
})

const initialState = {
    userToken: getFromLocalStorage('userToken'),
    userProfile: getFromLocalStorage('userProfile'),
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store