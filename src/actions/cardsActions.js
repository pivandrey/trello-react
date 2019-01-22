export const UPDATE_CARD = 'UPDATE_CARD';

export function updateCards(card) {
    return {
        type: UPDATE_CARD,
        payload: card,
    }
}