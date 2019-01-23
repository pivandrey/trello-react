import { ADD_COMMENTS, DELETE_COMMENTS } from '../actions/commentsAction'

const initialState = {
    commentsList: [],
}

export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENTS:
            const { data } = action.payload;
            return {commentsList: [...state.commentsList, data]}

        case DELETE_COMMENTS:
            const id_delete = action.payload.id;
            const comments_delete = state.filter(function(comment) {
                return comment.id !== id_delete
            })
            return comments_delete

        default:
            return state
    }
}