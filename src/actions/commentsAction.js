export const ADD_COMMENTS = 'ADD_COMMENTS';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

export function addComments(comments) {
  return {
    type: ADD_COMMENTS,
    payload: comments,
  }
}

export function deleteComments(comments) {
  return {
    type: DELETE_COMMENTS,
    payload: comments,
  }
}