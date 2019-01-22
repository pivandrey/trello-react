import { OFF_WELCOME } from '../actions/visibleWelcomeActions'

const initialState = {
    isVisibleWelcome: true,
}

export function visibleWelcomeReducer(state = initialState, action) {
    switch(action.type) {
        case OFF_WELCOME:
            return { isVisibleWelcome: action.payload }

        default: 
            return state
    }
}