import { CHANGE_COLUMN_TITLE } from '../actions/columnsActions'

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

export function columnsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLUMN_TITLE:
            const id = action.payload.id;
            const value = action.payload.value;
            const columnsList = state.columnsList.map(function(column) {
                if (column.id === id) {
                    return {...column, title: value}
                } else {
                    return column
                }
            })
            return { columnsList: columnsList }

        default:
            return state
    }
}
