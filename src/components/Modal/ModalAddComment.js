import React, {Component} from 'react';
import '../../style.css'

class ModalAddComment extends Component {

    state = {
        text: null,
        id: '',
        validate: true
    };

    componentWillMount() {
        const uidDefault = require('uuid/v1');
        this.setState ({
            id: uidDefault()
        })
    }

    //обработка изменений в поле для создания новой карты
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

    //вызываем функцию добавления новой карты из родителя Column/index
    onBtnClickHandler = (e) => {
        e.preventDefault();

        const uid = require('uuid/v1');
        this.setState ({
            id: uid()
        });

        const cardId = this.props.curCardId;

        const { text, id } = this.state;
        this.props.onAddComment({ id, text, cardId })
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

export default ModalAddComment