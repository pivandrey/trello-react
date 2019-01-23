import { CHANGE_TITLE_CARD } from '../actions/cardsActions'
import { CHANGE_DESCRIPTION_CARD } from '../actions/cardsActions'
import { ADD_CARD } from '../actions/cardsActions'
import { DELETE_CARD } from '../actions/cardsActions'

const initialState = {
    cardsList: [],
}

export function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE_CARD:
            const id_title = action.payload.id;
            const value_title = action.payload.value;
            const cards_title = state.map(function(card) {
                if (card.id === id_title) return card.title = value_title
                else return card
            })
            return { cardsList: cards_title}

        case CHANGE_DESCRIPTION_CARD:
            const id_description = action.payload.id;
            const value_value = action.payload.value;
            const cards_description = state.map(function(card) {
                if (card.id === id_description) return card.desctiption = value_value
                else return card
            })
            return { cardsList: cards_description}

        case ADD_CARD:
            const data = action.payload;
            return { cardsList: [...state, data]}
        
        case DELETE_CARD:
            const id_delete = action.payload.id;
            const cards_delete = state.filter(function(card) {
                return card.id !== id_delete
            })
            return cards_delete
        
        default:
            return state
    }
}