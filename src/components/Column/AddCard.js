import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddCard extends Component {

  state = {
    openNewCard: false,
    title: '',
    validate: true,
  };

  onButtonClick = () => {
    this.setState ({
      openNewCard: !this.state.openNewCard
    })
  };

  handleChange = (e) => {
    this.setState ({
      title: e.target.value,
    })
    if (e.target.value.trim()) {
      this.setState ({
        validate: false
      })
    }
  };

  handlePressEnter = (e) => {
    if (e.keyCode === 13) {
      this.onBtnClickHandler();
    }
  }

  onBtnClickHandler = (e) => {

    const { title } = this.state;
    this.props.onAddCards({ title });
    this.setState ({
      openNewCard: !this.state.openNewCard
    })
  };

  render() {
    const openCard = this.state.openNewCard;
    const button = !openCard &&
      <button className={'btn-addcard'} onClick = {this.onButtonClick}>Добавить еще одну карточку</button>;

    const addNewCard = openCard &&
      <div>
        <textarea
          className={'addcard-text'}
          name="newCard"
          id="newCard"
          onChange={this.handleChange}
          onKeyUp={this.handlePressEnter}
          placeholder='Введите заголовок'
        ></textarea>
        <br />
        <button
          className={'btn-addcard-end'}
          onClick = {this.onBtnClickHandler}
          disabled={this.state.validate}
        >Добавить карточку</button>
        <button
          className={'btn-addcard-close'}
          onClick = {this.onButtonClick}
        >X</button>
      </div>;

    return(
      <React.Fragment>
        {button}
        {addNewCard}
      </React.Fragment>
    )
  }
}

AddCard.propTypes = {
  onAddCards: PropTypes.func.isRequired,
}

export default AddCard