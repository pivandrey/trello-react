import { SET_USER } from '../actions/userAction'

const initialState = {
    user: 'defaultUser',
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload }

        default:
            return state
    }
}