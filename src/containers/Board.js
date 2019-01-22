import React, { Component } from 'react'
import { connect } from 'react-redux'

import Column from '../components/Column'

import { getTitleForColumn } from '../actions/columnActions'

class Board extends Component {

    render() {
        return(
            <div>
                {this.props.columnsList.map(c => (
                    <Column
                        columnId={c.id}
                        title={c.title} 
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        columnsList: store.columns.columnsTitleList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTitleAction: id => dispatch(getTitleForColumn(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)