import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { auth } from './auth'


export function storeCreator() {
    let store = createStore(
        combineReducers({
            auth: auth
        }),
        composeWithDevTools(applyMiddleware(logger))
    )
    store.subscribe(() => {
        const auth = { ...store.getState().auth };
        delete auth.user
        if(window && window.localStorage) {
            window.localStorage.setItem("auth_state", JSON.stringify(auth))
        }
    })
    return store
}
