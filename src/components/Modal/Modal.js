import React, {Component} from 'react';
import '../../style.css'
import ModalTitle from "./ModalTitle";
import ModalDescription from "./ModalDescription";
import ModalComments from "./ModalComments";
import ModalAddComment from "./ModalAddComment";

class Modal extends Component {

    changeTitleFromModal = (e) => {
        const newValue =  e.target.value;
        const currentCardId = this.props.card.id;
        this.props.changeTitle(newValue, currentCardId)
    };

    changeDescriptionFromModal = (e) => {
        const newValue =  e.target.value;
        const currentCardId = this.props.card.id;
        this.props.changeDescription(newValue, currentCardId)
    };

    componentDidMount() {
        this.initializeEscClosing();
    }

    initializeEscClosing = () => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', (e) => {
                if (e.which === 27) {
                    this.props.close()
                }
            });
        }
    };

    render() {

        return(
            <div className={'modal'}>
                <ModalTitle
                    title={this.props.card.title}
                    user={this.props.card.user}
                    changeTitle={this.changeTitleFromModal}
                />
                <ModalDescription
                    description={this.props.card.description}
                    changeDescription={this.changeDescriptionFromModal}
                />
                <h3 className={'modal__comments'}>Комментарии</h3>
                <ModalAddComment
                    onAddComment={this.props.addComment}
                    curCardId={this.props.card.id}
                />
                <h3 className={'modal__comments modal__actions'}>Действия</h3>
                <ModalComments
                    comments={this.props.comments}
                    deleteComment={this.props.deleteComment}
                />
                <button className={'btn-modal__close'} onClick={this.props.close}>X</button>
                <button className={'btn-modal__delete'} onClick={this.props.deleteCard} >Удалить карточку</button>
            </div>
        )
    }
}

export default Modal