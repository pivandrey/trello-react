import { SET_USER } from '../actions/userAction'

let archive = null;
const returnUser = JSON.parse(localStorage.getItem('user'));
if (returnUser) {
  archive = returnUser
} else {
  archive = ''
}

const initialState = {
  user: archive,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const newUser = action.payload
      const serialUser = JSON.stringify(newUser);
      localStorage.setItem('user', serialUser);
      return { user: action.payload }

    default:
      return state
  }
}