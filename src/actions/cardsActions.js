export const CHANGE_TITLE_CARD = 'CHANGE_TITLE_CARD';
export const CHANGE_DESCRIPTION_CARD = 'CHANGE_DESCRIPTION_CARD';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export function changeTitleCard(card) {
  return {
    type: CHANGE_TITLE_CARD,
    payload: card,
  }
}

export function changeDescriptionCard(card) {
  return {
    type: CHANGE_DESCRIPTION_CARD,
    payload: card,
  }
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    payload: card,
  }
}

export function deleteCard(card) {
  return {
    type: DELETE_CARD,
    payload: card,
  }
}