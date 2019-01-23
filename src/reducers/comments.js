import { ADD_COMMENTS, DELETE_COMMENTS } from '../actions/commentsAction'

const initialState = {
    commentsList: [],
}

export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENTS:
            const data = action.payload;
            return {commentsList: [...state.commentsList, data]}

        case DELETE_COMMENTS:
            const id = action.payload;
            const commentsDelete = state.commentsList.filter(function(comment) {
                return comment.id !== id
            })
            return { commentsList: commentsDelete }

        default:
            return state
    }
}