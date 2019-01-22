import React, {Component} from 'react';
import '../../style.css'

class ModalDescription extends Component {

    render() {

        const description = this.props.description;

        return(
            <div className={'modal__description'}>
                <p>Описание</p>
                <textarea
                    className={'modal__description-text'}
                    name="description"
                    id="description"
                    cols="60" rows="3"
                    defaultValue={description}
                    onBlur={this.props.changeDescription}
                    placeholder={'Добавить более подробное описание'}
                ></textarea>
            </div>
        )
    }
}

export default ModalDescription