import React, {Component} from 'react';
import '../../style.css'

class Comment extends Component {

    deleteComment = () => {
        const { id } = this.props.data
        this.props.deleteComment(id)
    }

    render() {
        const { author, text } = this.props.data

        return(
            <div className={'comment'}>
                <p className={'comment-author'}>{author}</p>
                <p className={'comment-text'}>{text}</p><br/>
                <button
                    className={'btn-delete-comment'}
                    onClick={this.deleteComment}
                >Удалить</button>
            </div>
        )
    }
}

export default Comment