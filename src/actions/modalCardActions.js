export const SEND_CARD_REQUEST = 'SEND_CARD_REQUEST';
export const SEND_CARD_SUCCESS = 'SEND_CARD_SUCCESS';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export function sendCard (card) {
  return  dispatch => {
    dispatch({
      type: SEND_CARD_REQUEST,
      payload: null
    })
    setTimeout(() => {
      dispatch({
        type: SEND_CARD_SUCCESS,
        payload: card,
      })
    }, 300)
  }
};

export function closeModal (off) {
  return {
    type: CLOSE_MODAL,
    payload: off
  }
};