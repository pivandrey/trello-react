import React, {Component} from 'react';
import '../../style.css'

class ModalTitle extends Component {

    render() {

        const title = this.props.title;

        return(
            <React.Fragment>
                <textarea
                    name="ColumnTitle"
                    className={'modalTitle'}
                    cols="20" rows="1"
                    defaultValue={title}
                    onBlur = {this.props.changeTitle}
                ></textarea>
                <p className={'modalAuthorCard'}>Карточка создана: {this.props.user}</p>
            </React.Fragment>
        )
    }
}

export default ModalTitle