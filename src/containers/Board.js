import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Column from '../components/Column'

class Board extends Component {

    render() {
        return(
            <div>
                {this.props.columnsList.map(c => (
                    <Column
                        key={c.id}
                        columnId={c.id}
                        title={c.title}
                    />
                ))}
            </div>
        )
    }
}

Board.propTypes = {
    columnsList: PropTypes.array.isRequired,
}

const mapStateToProps = store => {
    return {
        columnsList: store.columns.columnsList,
    }
}

export default connect(
    mapStateToProps
)(Board)