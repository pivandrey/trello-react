import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import { setUser } from '../actions/userAction'
import { visibleWelcome } from '../actions/visibleWelcomeActions'

class Welcome extends Component {

  handlePressEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.visibleWelcome(false)
    }
  }

  handleClickAccept = () => {
    this.props.visibleWelcome(false)
  }

  handleChangeUserName = (e) => {
    const userName = e.target.value
    this.props.setUser(userName)
  };

  validateWelcome = () => {
    const user = this.props.user;
    if (user.trim()) return true
  };

  render() {
    return(
      <div className={'welcome__modal_out'}>
        <div className={'welcome__modal'}>
          <h3 className={'welcome-header'}>trello</h3>
          <textarea
            className={'welcome-text'}
            type="text"
            name="user"
            placeholder={'Введите Ваше имя'}
            onChange={this.handleChangeUserName}
            onKeyUp={this.handlePressEnter}
          ></textarea> <br />
          <button
            className={'btn-welcome-close'}
            onClick={this.handleClickAccept}
            disabled={!this.validateWelcome()}
          >Продолжить</button>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  user: PropTypes.string.isRequired,
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setUser,
    visibleWelcome,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)