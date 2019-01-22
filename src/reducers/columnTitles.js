import DefaultColumnsTitle from '../defaultdata/DefaultColumnsTitle'
import { CHANGE_TITLE } from '../actions/columnTitlesActions'

const initialState = {
    columnsTitleList: DefaultColumnsTitle,
}

export function columnTitlesReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return { columnsTitleList: action.payload }

        default: 
            return state
    }
}