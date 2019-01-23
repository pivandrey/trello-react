import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
    this.props.changeTitleAction({
      id,
      value,
    })
  }

  getCards = () => {
    const { columnId, cardsList, commentsList } = this.props;

    const cardsForColumn = cardsList.filter( (card) => {
      return card.columnId === columnId
    }).map( (card) => {
      let x = 0;
      commentsList.filter( (comment) => {
        if (card.id === comment.cardId) return ++x
      }); 
      return { ...card, countComments: x }
    })
    return cardsForColumn;
  };

  handleShowModal = (id) => {
    const { cardsList } = this.props;
    const cardForModal = cardsList.filter( (card) => {
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
    const { columnId, title } = this.props;
    return (
      <div className={'column'} >
        <ColumnTitle 
          columnId={columnId}
          title={title}
          changeTitle={this.handleChangeTitleColumn}
        />
        <ListOfCard
          columnId={columnId}
          data={this.getCards()}
          modal={this.handleShowModal}
        />
        <AddCard
          onAddCards={this.handleAddCard}
        />
      </div>
    )
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  cardsList: PropTypes.array.isRequired,
  commentsList: PropTypes.array.isRequired,
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