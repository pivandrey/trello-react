import React, {Component} from 'react'

class AddCard extends Component {

    state = {
        openNewCard: false,
        title: '',
        description: '',
        id: '',
        validate: true,
    };

    //задаем индивидуальный ID
    componentWillMount() {
        const uidDefault = require('uuid/v1');
        this.setState ({
            id: uidDefault()
        })
    }

    //visible для кнопки и для поля
    onButtonClick = () => {
        this.setState ({
            openNewCard: !this.state.openNewCard
        })
    };

    //обработка изменений в поле для создания новой карты
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

    //вызываем функцию добавления новой карты из родителя Column/index
    onBtnClickHandler = (e) => {

        const uid = require('uuid/v1');
        this.setState ({
            id: uid()
        });

        const { id, title, description } = this.state;
        const columnId = this.props.columnId;
        this.props.onAddCards({ id, title, description, columnId });
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

export default AddCard