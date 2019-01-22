import React, {Component} from 'react'
import ListOfCard from './ListOfCard'
import ColumnTitle from './ColumnTitle'
import AddCard from './AddCard'
import '../../style.css'

class Column extends Component {

    onChangeHandlerTitle = (e) => {
        const id = this.props.columnId;
        const newValue = e.target.value;
        this.props.changeTitle(newValue, id)
    };

    getCards = () => {
        const { columnId } = this.props;
        return this.props.cards(columnId);
    };

    getTitle = () => {
        const id = this.props.columnId;
        return this.props.title(id);
    }

    render() {
        const { columnId } = this.props;
        return (
            <div className={'column'} >
                <ColumnTitle 
                    columnId={columnId} 
                    title={this.getTitle().title} 
                    changeTitle={this.onChangeHandlerTitle} 
                />
                <ListOfCard
                    columnId={columnId}
                    data={this.getCards()}
                    modal={this.props.modal}
                    comments={this.props.comments}
                />
                <AddCard
                    columnId={columnId}
                    onAddCards = {this.props.createCard}
                />
            </div>
        )
    }
}

export default Column