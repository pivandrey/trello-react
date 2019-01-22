import { UPDATE_CARD } from '../actions/cardsActions'

const initialState = {
    cardsList: [],
}

export function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CARD:
            return { cardsList: action.payload }

        default:
            return state
    }
}