import { SEND_CARD_REQUEST, SEND_CARD_SUCCESS, CLOSE_MODAL } from '../actions/modalCardActions'

const initialState = {
    isVisibleModal: false,
    card: null,
    currentCardId: '',
    isFetching: false,
}

export function modalCardReducer (state = initialState, action) {
    switch(action.type) {
        case SEND_CARD_REQUEST:
            return {...state, isFetching: true}

        case SEND_CARD_SUCCESS:
            return {
                card: action.payload,
                currentCardId: action.payload.id,
                isVisibleModal: true,
                isFetching: false,
            }

        case CLOSE_MODAL:
            return {...state, isVisibleModal: action.payload }

        default:
            return state
    }
}