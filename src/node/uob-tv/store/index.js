import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { auth } from './auth'


export function storeCreator() {
    return createStore(
        combineReducers({
            auth: auth
        }),
        composeWithDevTools(applyMiddleware(logger))
    )
}
