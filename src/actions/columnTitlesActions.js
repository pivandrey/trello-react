export const CHANGE_TITLE = 'CHANGE_TITLE';

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        payload: title,
    }
}