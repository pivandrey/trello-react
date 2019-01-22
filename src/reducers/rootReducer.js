import { combineReducers } from 'redux'
import { cardsReducer } from './cards'
import { columnTitlesReducer } from './columnTitles'
import { commentsReducer } from './comments'
import { userReducer } from './user'
import { visibleWelcomeReducer } from './visibleWelcome'
import { modalCardReducer } from './modalCard'

export const rootReducer = combineReducers ({
    cards: cardsReducer,
    columnTitles: columnTitlesReducer,
    comments: commentsReducer,
    user: userReducer,
    welcome: visibleWelcomeReducer,
    modal: modalCardReducer,
})
