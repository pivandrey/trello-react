import { ADD_COMMENTS, DELETE_COMMENTS } from '../actions/commentsAction'

let archive = null;
const returnComments = JSON.parse(localStorage.getItem('comments'));
if (returnComments) {
    archive = returnComments
} else {
    archive = []
}

const initialState = {
    commentsList: archive,
}

const randomId = () => {
    return Math.random().toString(36).substr(2, 9)
}

export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENTS:
            const data = action.payload;
            const newCommentsArray = [...state.commentsList, data]

            const serialCommentsAdd = JSON.stringify(newCommentsArray);
            localStorage.setItem('comments', serialCommentsAdd);

            return {commentsList: [...state.commentsList, {...data, id: randomId()}]}

        case DELETE_COMMENTS:
            const id = action.payload;
            const commentsDelete = state.commentsList.filter(function(comment) {
                return comment.id !== id
            })

            const serialCommentsDelete = JSON.stringify(commentsDelete);
            localStorage.setItem('comments', serialCommentsDelete);

            return { commentsList: commentsDelete }

        default:
            return state
    }
}