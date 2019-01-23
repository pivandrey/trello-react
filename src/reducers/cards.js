import { CHANGE_TITLE_CARD } from '../actions/cardsActions'
import { CHANGE_DESCRIPTION_CARD } from '../actions/cardsActions'
import { ADD_CARD } from '../actions/cardsActions'
import { DELETE_CARD } from '../actions/cardsActions'

let archive = null;
const returnCards = JSON.parse(localStorage.getItem('cards'));
if (returnCards) {
    archive = returnCards
} else {
    archive = []
}

const initialState = {
    cardsList: archive,
}

const randomId = () => {
    return Math.random().toString(36).substr(2, 9)
}

export function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE_CARD:
            const idTitle = action.payload.id;
            const valueTitle = action.payload.value;
            const cardsTitle = state.cardsList.map(function(card) {
                if (card.id === idTitle) return {...card, title: valueTitle}
                else return card
            })

            const serialCardsTitle = JSON.stringify(cardsTitle);
            localStorage.setItem('cards', serialCardsTitle);

            return { cardsList: cardsTitle}

        case CHANGE_DESCRIPTION_CARD:
            const idDescription = action.payload.id;
            const valueDescription = action.payload.value;
            const cardsDescription = state.cardsList.map(function(card) {
                if (card.id === idDescription) return {...card, description: valueDescription}
                else return card
            })

            const serialCardsDescription = JSON.stringify(cardsDescription);
            localStorage.setItem('cards', serialCardsDescription);

            return { cardsList: cardsDescription}

        case ADD_CARD:
            const data = action.payload;
            const newCardsArray = [...state.cardsList, {...data, id: randomId(), description: ''}]

            const serialCardsAdd = JSON.stringify(newCardsArray);
            localStorage.setItem('cards', serialCardsAdd);

            return { cardsList: newCardsArray }
        
        case DELETE_CARD:
            const id = action.payload;
            const cardsDelete = state.cardsList.filter(function(card) {
                return card.id !== id
            })

            const serialCardsDelete = JSON.stringify(cardsDelete);
            localStorage.setItem('cards', serialCardsDelete);

            return { cardsList: cardsDelete }
        
        default:
            return state
    }
}