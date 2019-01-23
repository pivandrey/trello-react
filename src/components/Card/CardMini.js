import React, {Component} from 'react'
import CardTitle from "./CardTitle";
import CardCommentsCount from "./CardCommentsCount";

class CardMini extends Component {

    handleClick = () => {
        const { id } = this.props.data;
        this.props.modal(id)
    }

    calculateComments = () => {
        const comments = this.props.comments;
        const curCard = this.props.id;
        let commentsTemplate = null;

        if(comments) {
            commentsTemplate = comments.filter(function(comment){
                return comment.cardId === curCard
            })
        }
        return commentsTemplate.length
    }

    render() {

        const { title, comments, id } = this.props.data;

        return(
            <div className={'card_mini'} onClick={this.handleClick} >
                <CardTitle data={title} />
                <CardCommentsCount data={comments} countComments={this.calculateComments()} id={id}/>
            </div>
        )
    }
}

export default CardMini