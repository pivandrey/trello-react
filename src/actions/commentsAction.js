export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export function updateComments(comments) {
    return {
        type: UPDATE_COMMENTS,
        payload: comments,
    }
}