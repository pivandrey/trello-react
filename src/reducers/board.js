import { CHANGE_COLUMN_TITLE } from '../actions/boardActions'

const initialState = {
    columnsList: [
        {
            id: 1,
            title: 'column 1'
        },
        {
            id: 2,
            title: 'column 2'
        },
        {
            id: 3,
            title: 'column 3'
        },
        {
            id: 4,
            title: 'column 4'
        },
    ],
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLUMN_TITLE:
            const { id } =  action.payload;
            const { value } = action.payload;
            const columnsList = state.map(function(c) {
                if (c.id === id) {
                    return c.title = value
                } else {
                    return c
                }
            })
            return { columnsList: columnsList }

        default:
            return state
    }
}
