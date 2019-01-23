import React, {Component} from 'react';
import { connect } from 'react-redux'

import ModalTitle from "../components/Modal/ModalTitle";
import ModalDescription from "../components/Modal/ModalDescription";
import ModalComments from "../components/Modal/ModalComments";
import ModalAddComment from "../components/Modal/ModalAddComment";

import { changeTitleCard, changeDescriptionCard, deleteCard } from '../actions/cardsActions'
import { closeModal } from '../actions/modalCardActions'
import { addComments, deleteComments } from '../actions/commentsAction'

import '../style.css'

class Modal extends Component {

    changeTitleFromModal = (e) => {
        const newValue =  e.target.value;
        const currentCardId = this.props.currentCardId;
        const newTitle = {
            id: currentCardId,
            value: newValue,
        }
        this.props.changeTitleCardAction(newTitle)
    };

    changeDescriptionFromModal = (e) => {
        const newValue =  e.target.value;
        const currentCardId = this.props.currentCardId;
        const newDescription = {
            id: currentCardId,
            value: newValue,
        }
        this.props.changeDescriptionCard(newDescription)
    };

    handleAddComment = (newComment) => {
        const nextComment = {...newComment, author: this.props.user}
        this.props.addCommentAction(nextComment);
    };

    handleDeleteComment = (id) => {
        this.props.deleteCommentsAction(id);
    };

    renderComments = () => {
        const comments = this.props.commentsList;
        const id = this.props.currentCardId;
        let commentsTemplate = null;

        if(comments.length) {
            commentsTemplate = comments.filter(function(comment) {
                return comment.cardId === id
            })
        }
        return commentsTemplate
    };

    handleDeleteCard = () => {
        const cardID = this.props.currentCardId;
        this.props.closeModalAction(false);
        this.props.deleteCardAction(cardID);
    };
    
    componentDidMount() {
        this.initializeEscClosing();
    }

    initializeEscClosing = () => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', (e) => {
                if (e.which === 27) {
                    this.props.closeModalAction(false);
                }
            });
        }
    };

    handleCloseModal = () => {
        this.props.closeModalAction(false);
    };

    render() {

        return(
            <div className={'modal'}>
                <ModalTitle
                    title={this.props.modalCard.title}
                    user={this.props.user}
                    changeTitle={this.changeTitleFromModal}
                />
                <ModalDescription
                    description={this.props.modalCard.description}
                    changeDescription={this.changeDescriptionFromModal}
                />
                <h3 className={'modal__comments'}>Комментарии</h3>
                <ModalAddComment
                    onAddComment={this.handleAddComment}
                    curCardId={this.props.currentCardId}
                />
                <h3 className={'modal__comments modal__actions'}>Действия</h3>
                <ModalComments
                    comments={this.renderComments()}
                    deleteComment={this.handleDeleteComment}
                />
                <button className={'btn-modal__close'} onClick={this.handleCloseModal}>X</button>
                <button className={'btn-modal__delete'} onClick={this.handleDeleteCard} >Удалить карточку</button>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user.user,
        commentsList: store.comments.commentsList,
        modalCard: store.modal.card,
        currentCardId: store.modal.currentCardId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModalAction: off => dispatch(closeModal(off)),
        deleteCardAction: id => dispatch(deleteCard(id)),
        changeTitleCardAction: data => dispatch(changeTitleCard(data)),
        changeDescriptionCard: data => dispatch(changeDescriptionCard(data)),
        addCommentAction: data => dispatch(addComments(data)),
        deleteCommentsAction: id => dispatch(deleteComments(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)