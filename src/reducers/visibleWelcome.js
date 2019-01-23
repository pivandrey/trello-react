import { OFF_WELCOME } from '../actions/visibleWelcomeActions'

let archive = null;
const returnWelcome = JSON.parse(localStorage.getItem('welcome'));
if (returnWelcome) {
    archive = false
} else {
    archive = true
}

const initialState = {
    isVisibleWelcome: archive,
}

export function visibleWelcomeReducer(state = initialState, action) {
    switch(action.type) {
        case OFF_WELCOME:
            const serialWelcome = JSON.stringify('string');
            localStorage.setItem('welcome', serialWelcome);
            return { isVisibleWelcome: action.payload }

        default: 
            return state
    }
}