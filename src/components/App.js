import React, {Component} from 'react'
import { connect } from 'react-redux'


import Modal from './Modal'
import Welcome from './Welcome'
import Board from '../containers/Board'

import '../style.css'


class App extends Component {

    /* componentDidMount() {
        const returnCards = JSON.parse(localStorage.getItem('cards'));
        const returnComments = JSON.parse(localStorage.getItem('comments'));
        const user = JSON.parse(localStorage.getItem('user'));
        const welcome = JSON.parse(localStorage.getItem('welcome'));
        const titles = JSON.parse(localStorage.getItem('titles'));

        if (returnCards) {
            this.props.updateCardsAction(returnCards);
        }
        if (returnComments) {
            this.props.updateCommentsAction(returnComments);
        }
        if (user) {
            this.props.visibleWelcomeAction(welcome);
            this.props.setUserAction(user);
        }
        if(titles) {
            this.props.changeTitleAction(titles);
        }
    } */

    render() {
        console.log('-----render App')
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
