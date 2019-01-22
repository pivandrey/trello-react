import React, {Component} from 'react'

class Welcome extends Component {

    handlePressEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.close()
        }
    }

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
                        onChange={this.props.changeUser}
                        onKeyUp={this.handlePressEnter}
                    ></textarea> <br />
                    <button
                        className={'btn-welcome-close'}
                        onClick={this.props.close}
                        disabled={!this.props.validate()}
                    >Продолжить</button>
                </div>
            </div>
        )
    }
}

export default Welcome