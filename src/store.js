import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {searchReducer} from './shared/reducers/searchReducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    search: searchReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store