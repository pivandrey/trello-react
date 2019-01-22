import { UPDATE_COMMENTS } from '../actions/commentsAction'

const initialState = {
    commentsList: [],
}

export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_COMMENTS:
            return { commentsList: action.payload }

        default:
            return state
    }
}