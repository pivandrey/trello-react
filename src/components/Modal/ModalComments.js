import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Comment from './Comment'

import '../../style.css'

class ModalComments extends Component {

  renderComments = () => {
    const comments = this.props.comments;
    const deleteComment = this.props.deleteComment
    let commentsTemplate = null;

    if(comments) {
      commentsTemplate = comments.map( (item) => {
        return <Comment key={item.id} data={item} deleteComment={deleteComment} />
      })
    }
    return commentsTemplate
  };

  render() {
    const comments = this.props.comments;
    const deleteComment = this.props.deleteComment
    return(
      <React.Fragment>
        {this.renderComments()}
      </React.Fragment>
    )
  }
}

ModalComments.propTypes = {
  comments: PropTypes.array,
  deleteComment: PropTypes.func.isRequired,
}

export default ModalComments