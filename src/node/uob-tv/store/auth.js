import { useReducer } from "react";

const AUTH_ACTIONS = {
    LOGIN: "AUTH_ACTIONS.LOGIN",
    LOGOUT: "AUTH_ACTIONS.LOGOUT",
}

export function login(user, token) {
    let basicProfile = user.getBasicProfile()
    return {
        type: AUTH_ACTIONS.LOGIN,
        userId: basicProfile.getId(),
        user,
        profile: {
            name: basicProfile.getName(),
            email: basicProfile.getEmail(),
            imageURL: basicProfile.getImageUrl(),
        },
        token,
        apiClients: {

        }
    }
}

export function logout() {
    return {
        type: AUTH_ACTIONS.LOGOUT,
    }
}

const INITIAL_STATE = {
    user: undefined,
    accessToken: undefined,
    authenticated: false
}

export function auth(state = INITIAL_STATE, action) {
    let newState = state
    switch(action.type) {
        case AUTH_ACTIONS.LOGIN:
            newState = {
                user: action.user,
                accessToken: action.token,
                authenticated: true,
                profile: action.profile,
            }
            break
        case AUTH_ACTIONS.LOGOUT:
            newState = INITIAL_STATE
            break;
        default:
            break
    }
    return newState
}
