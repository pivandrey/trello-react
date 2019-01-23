import { combineReducers } from 'redux'
import { cardsReducer } from './cards'
import { columnsReducer } from './columns'
import { commentsReducer } from './comments'
import { userReducer } from './user'
import { visibleWelcomeReducer } from './visibleWelcome'
import { modalCardReducer } from './modalCard'

export const rootReducer = combineReducers ({
  cards: cardsReducer,
  columns: columnsReducer,
  comments: commentsReducer,
  user: userReducer,
  welcome: visibleWelcomeReducer,
  modal: modalCardReducer,
})
