import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import Modal from './Modal'
import Welcome from './Welcome'
import Board from '../containers/Board'

import '../style.css'


class App extends Component {

    render() {
        const isVisibleModal = this.props.isVisibleModal;
        const isVisibleWelcome = this.props.isVisibleWelcome;
        const isFetching = this.props.isFetching;

        return (
            <div>
                <div className='column_list'>
                    {isVisibleWelcome &&
                    <Welcome />}
                    {!isVisibleWelcome &&
                    <Board />}
                    {isVisibleModal &&
                    <Modal />}
                    {isFetching && 
                    <p className="download">Загрузка...</p>}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    isVisibleWelcome: PropTypes.bool.isRequired,
    isVisibleModal: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = store => {
    return {
        isVisibleWelcome: store.welcome.isVisibleWelcome,
        isVisibleModal: store.modal.isVisibleModal,
        isFetching: store.modal.isFetching,
    }
}

export default connect(
    mapStateToProps
)(App)
