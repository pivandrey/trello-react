import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/userAction'
import { visibleWelcome } from '../actions/visibleWelcomeActions'

class Welcome extends Component {

    handlePressEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.visibleWelcomeAction(false)
        }
    }

    handleClickAccept = () => {
        this.props.visibleWelcomeAction(false)
    }

    handleChangeUserName = (e) => {
        const userName = e.target.value
        this.props.setUserAction(userName)
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
                        onBlur={this.handleChangeUserName}
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

const mapStateToProps = store => {
    return {
        user: store.user.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserAction: user => dispatch(setUser(user)),
        visibleWelcomeAction: off => dispatch(visibleWelcome(off)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)