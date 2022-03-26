import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {searchReducer} from './shared/reducers/searchReducers'
import {userTokenReducer} from './shared/reducers/userReducers'
import {getFromLocalStorage} from './shared/utils/localStorage';

const reducer = combineReducers({
    search: searchReducer,
    userToken: userTokenReducer,
})

const initialState = {
    userToken: getFromLocalStorage('userToken')
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store