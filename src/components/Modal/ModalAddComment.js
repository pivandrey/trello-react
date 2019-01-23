import React, {Component} from 'react';
import PropTypes from 'prop-types'

import '../../style.css'

class ModalAddComment extends Component {

  state = {
    text: null,
    validate: true
  };

  handleChange = (e) => {
    this.setState ({
      text: e.target.value
    })

    if (e.target.value.trim()) {
      this.setState ({
        validate: false
      })
    }
  };

  onBtnClickHandler = (e) => {
    e.preventDefault();
    const cardId = this.props.curCardId;
    const { text } = this.state;
    this.props.onAddComment({ text, cardId })
  };

  render() {
    return(
      <div>
        <textarea
          className={'modal__comments-add'}
          name="comment"
          id="comment"
          onChange={this.handleChange}
          placeholder='Напишите комментарий'
        ></textarea>
        <br />
        <button
          className={'btn-add_comment'}
          onClick = {this.onBtnClickHandler}
          disabled={this.state.validate}
        >Сохранить</button>
      </div>
    )
  }
}

ModalAddComment.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  curCardId: PropTypes.string.isRequired,
}

export default ModalAddComment