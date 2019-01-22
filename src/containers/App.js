import React, {Component} from 'react';
import { connect } from 'react-redux'

import Column from '../components/Column'
import Modal from '../components//Modal'
import Welcome from '../components//Welcome'

import { changeTitle } from '../actions/columnTitlesActions'
import { updateCards } from '../actions/cardsActions'
import { updateComments } from '../actions/commentsAction'
import { setUser } from '../actions/userAction'
import { visibleWelcome } from '../actions/visibleWelcomeActions'
import { sendCard, closeModal } from '../actions/modalCardActions'

import '../style.css'


class App extends Component {

    handleAddCards = (data) => {
        const nextCards = [...this.props.cardsList.cardsList, {...data, user: this.props.user.user}];

        const serialCards = JSON.stringify(nextCards);
        localStorage.setItem('cards', serialCards);

        this.props.updateCardsAction(nextCards);
    };

    renderTitleForColumn = (id) => {
        const titles = this.props.columnsTitleList.columnsTitleList;
        let titlesTemplate = null;

        if(titles) {
            titlesTemplate = titles.filter(function(title) {
                return title.columnId === id
            })
        }
        return titlesTemplate[0]
    }

    renderCardForColumn = (id) => {
        const cards = this.props.cardsList.cardsList;
        let cardsTemplate = null;

        if(cards.length) {
            cardsTemplate = cards.filter(function(card) {
                return card.columnId === id
            })
        }
        return cardsTemplate
    };

    handleShowModal = (id) => {
        const cards = this.props.cardsList.cardsList;
        let cardForModal = null;
        cardForModal = cards.filter(function(card) {
            return card.id === id
        });

        this.props.sendCardAction(cardForModal[0]);
    };

    handleCloseModal = () => {
        this.props.closeModalAction(false);
    };

    handleChangeTitleColumn = (value, id) => {
        const titles = this.props.columnsTitleList.columnsTitleList;
        let titlesTemplate = null;

        titlesTemplate = titles.map(function(title) {
            if (title.columnId === id) {
                title.title = value
            }
            return title
        });

        const serialTitles = JSON.stringify(titlesTemplate);
        localStorage.setItem('titles', serialTitles);

        this.props.changeTitleAction(titlesTemplate);
    }

    handleChangeTitleCard = (value, id) => {
        const cards = this.props.cardsList.cardsList;
        let cardsTemplate = null;

        cardsTemplate = cards.map(function(card) {
            if(card.id === id) {
                card.title = value
            }
            return card
        });
        
        const serialCards = JSON.stringify(cardsTemplate);
        localStorage.setItem('cards', serialCards);

        this.props.updateCardsAction(cardsTemplate);
        
    };

    handleChangeDescription = (value, id) => {
        const cards = this.props.cardsList.cardsList;
        let cardsTemplate = null;

        cardsTemplate = cards.map(function(card) {
            if(card.id === id) {
                card.description = value
            }
            return card
        });

        const serialCards = JSON.stringify(cardsTemplate);
        localStorage.setItem('cards', serialCards);

        this.props.updateCardsAction(cardsTemplate);
    };

    handleAddComment = (newComment) => {
        const nextComments = 
        [{...newComment, author: this.props.user.user}, ...this.props.commentsList.commentsList];
        
        const serialComments  = JSON.stringify(nextComments);
        localStorage.setItem('comments', serialComments);

        this.props.updateCommentsAction(nextComments);
    };

    handleDeleteComment = (id) => {
        const comments = this.props.commentsList.commentsList;
        let commentsTemplate = null;

        commentsTemplate = comments.filter(function(comment) {
            if (comment.id !== id) {
                return comment
            }
            return commentsTemplate
        });

        const serialComments = JSON.stringify(commentsTemplate);
        localStorage.setItem('comments', serialComments);

        this.props.updateCommentsAction(commentsTemplate);
    };

    handleDeleteCard = () => {
        const cards = this.props.cardsList.cardsList;
        const cardID = this.props.currentCardId;
        let cardsTemplate = null;

        cardsTemplate = cards.filter(function(card) {
            if (card.id !== cardID) {
                return card
            }
            return cardsTemplate
        });

        const serialCards = JSON.stringify(cardsTemplate);
        localStorage.setItem('cards', serialCards);

        this.props.closeModalAction(false);
        this.props.updateCardsAction(cardsTemplate);
    };

    renderCommentsForModal = () => {
        const comments = this.props.commentsList.commentsList;
        const id = this.props.currentCardId;
        let commentsTemplate = null;

        if(comments.length) {
            commentsTemplate = comments.filter(function(comment) {
                return comment.cardId === id
            })
        }
        return commentsTemplate
    };

    handleChangeUserName = (e) => {
        const userName = e.target.value
        
        this.props.setUserAction(userName)

        const serialUser = JSON.stringify(e.target.value);
        localStorage.setItem('user', serialUser);

    };

    handleBtnClickWelcome = () => {
        const welcome = false;
        this.props.visibleWelcomeAction(welcome);
        const serialWelcomeModal = JSON.stringify(welcome);
        localStorage.setItem('welcome', serialWelcomeModal);

    };

    validateWelcome = () => {
        const user = this.props.user.user;
        if (user.trim()) return true
    };

    componentDidMount() {
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
    }

    render() {
        console.log('-----render')
        const isVisibleModal = this.props.isVisibleModal;
        const modalCard = this.props.modalCard;
        const { isVisibleWelcome } = this.props.isVisibleWelcome;
        const { commentsList } = this.props.commentsList;
        const isFetching = this.props.isFetching;

        return (
            <div>
                    <div className='column_list'>
                    {isVisibleWelcome &&
                    <Welcome
                        changeUser={this.handleChangeUserName}
                        close={this.handleBtnClickWelcome}
                        validate={this.validateWelcome}
                    />}
                    {!isVisibleWelcome && <div>
                        <Column
                            columnId={1}
                            title={this.renderTitleForColumn}
                            cards={this.renderCardForColumn}
                            createCard={this.handleAddCards}
                            modal={this.handleShowModal}
                            comments={commentsList}
                            changeTitle={this.handleChangeTitleColumn}
                        />
                        <Column
                            columnId={2}
                            cards={this.renderCardForColumn}
                            createCard={this.handleAddCards}
                            modal={this.handleShowModal}
                            comments={commentsList}
                            title={this.renderTitleForColumn}
                            changeTitle={this.handleChangeTitleColumn}
                        />
                        <Column
                            columnId={3}
                            cards={this.renderCardForColumn}
                            createCard={this.handleAddCards}
                            modal={this.handleShowModal}
                            comments={commentsList}
                            title={this.renderTitleForColumn}
                            changeTitle={this.handleChangeTitleColumn}
                        />
                        <Column
                            columnId={4}
                            cards={this.renderCardForColumn}
                            createCard={this.handleAddCards}
                            modal={this.handleShowModal}
                            comments={commentsList}
                            title={this.renderTitleForColumn}
                            changeTitle={this.handleChangeTitleColumn}
                        />
                    </div>}
                    {isVisibleModal &&
                    <Modal
                        card={modalCard}
                        close={this.handleCloseModal}
                        addComment={this.handleAddComment}
                        comments={this.renderCommentsForModal()}
                        changeTitle={this.handleChangeTitleCard}
                        changeDescription={this.handleChangeDescription}
                        deleteComment={this.handleDeleteComment}
                        deleteCard={this.handleDeleteCard}
                    />}
                    {isFetching && 
                    <p className="download">Загрузка...</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store)
    return {
        user: store.user,
        cardsList: store.cards,
        commentsList: store.comments,
        columnsTitleList: store.columnTitles,
        isVisibleWelcome: store.welcome,
        isVisibleModal: store.modal.isVisibleModal,
        modalCard: store.modal.card,
        currentCardId: store.modal.currentCardId,
        isFetching: store.modal.isFetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitleAction: title => dispatch(changeTitle(title)),
        updateCardsAction: cards => dispatch(updateCards(cards)),
        updateCommentsAction: comments => dispatch(updateComments(comments)),
        setUserAction: user => dispatch(setUser(user)),
        visibleWelcomeAction: off => dispatch(visibleWelcome(off)),
        sendCardAction: card => dispatch(sendCard(card)),
        closeModalAction: off => dispatch(closeModal(off)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
