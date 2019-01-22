import DefaultColumnsTitle from '../defaultdata/DefaultColumnsTitle'
import { CHANGE_TITLE } from '../actions/columnActions'
import { GET_TITLE } from '../actions/columnActions'

const initialState = {
    columnsTitleList: DefaultColumnsTitle,
}

export function columnsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return { columnsTitleList: action.payload }

        case GET_TITLE:
            return { columnsTitleList: renderTitleForColumn(action.payload)}

        default: 
            return state
    }
}

const renderTitleForColumn = (id) => {
    const titles = this.initialState.columnsTitleList;
    let titlesTemplate = null;

    if(titles) {
        titlesTemplate = titles.filter(function(title) {
            return title.columnId === id
        })
    }
    return titlesTemplate[0]
}