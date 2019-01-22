export const CHANGE_COLUMN_TITLE = 'CHANGE_COLUMN_TITLE';

export function changeTitle(payload) {
    return {
        type: CHANGE_COLUMN_TITLE,
        payload,
    }
}
