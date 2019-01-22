import { combineReducers } from 'redux'
import { cardsReducer } from './cards'
import { boardReducer } from './board'
import { commentsReducer } from './comments'
import { userReducer } from './user'
import { visibleWelcomeReducer } from './visibleWelcome'
import { modalCardReducer } from './modalCard'

export const rootReducer = combineReducers ({
    cards: cardsReducer,
    columns: boardReducer,
    comments: commentsReducer,
    user: userReducer,
    welcome: visibleWelcomeReducer,
    modal: modalCardReducer,
})
