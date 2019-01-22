import React, {Component} from 'react';
import '../../style.css'
import Comment from './Comment'

class ModalComments extends Component {

    renderComments = () => {
        const comments = this.props.comments;
        const deleteComment = this.props.deleteComment
        let commentsTemplate = null;

        if(comments) {
            commentsTemplate = comments.map(function (item) {
                return <Comment key={item.id} data={item} deleteComment={deleteComment} />
            })
        }
        return commentsTemplate
    };

    render() {

        return(
            <React.Fragment>
                {this.renderComments()}
            </React.Fragment>
        )
    }
}

export default ModalComments