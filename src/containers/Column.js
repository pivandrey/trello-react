import React, {Component} from 'react'
import { connect } from 'react-redux'

import ListOfCard from '../components/Column/ListOfCard'
import ColumnTitle from '../components/Column/ColumnTitle'
import AddCard from '../components/Column/AddCard'

import { changeTitle } from '../actions/columnsActions'
import { sendCard } from '../actions/modalCardActions'
import { addCard } from '../actions/cardsActions'

import '../style.css'

class Column extends Component {

    handleChangeTitleColumn = (e) => {
        const value = e.currentTarget.value;
        const id = this.props.columnId;
        const data = {
            id: id,
            value: value,
        }
        this.props.changeTitleAction(data)
    }

    renderCards = () => {
        const { columnId } = this.props;
        const { cardsList } = this.props;

        const cardsForColumn = cardsList.filter(function(card) {
            return card.columnId === columnId
        })

        return cardsForColumn;
    };

    handleShowModal = (id) => {
        const { cardsList } = this.props;
        const cardForModal = cardsList.filter(function(card) {
            return card.id === id
        });

        this.props.sendCardAction(cardForModal[0]);
    };

    handleAddCard = (data) => {
        const user = this.props.user;
        const columnId = this.props.columnId;
        const newCard = {...data, user: user, columnId: columnId}
        this.props.addCardAction(newCard);
    }

    render() {
        console.log('-----render Column')
        const { columnId, title, commentsList } = this.props;
        return (
            <div className={'column'} >
                <ColumnTitle 
                    columnId={columnId}
                    title={title}
                    changeTitle={this.handleChangeTitleColumn}
                />
                <ListOfCard
                    columnId={columnId}
                    data={this.renderCards()}
                    modal={this.handleShowModal}
                    comments={commentsList}
                />
                <AddCard
                    onAddCards={this.handleAddCard}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user.user,
        cardsList: store.cards.cardsList,
        commentsList: store.comments.commentsList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitleAction: data => dispatch(changeTitle(data)),
        sendCardAction: card => dispatch(sendCard(card)),
        addCardAction: cards => dispatch(addCard(cards)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Column)