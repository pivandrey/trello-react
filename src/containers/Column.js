import React, {Component} from 'react'
import { connect } from 'react-redux'

import ListOfCard from '../components/Column/ListOfCard'
import ColumnTitle from '../components/Column/ColumnTitle'
import AddCard from '../components/Column/AddCard'



import '../../style.css'

class Column extends Component {

    onChangeHandlerTitle = (e) => {
        const id = this.props.columnId;
        const newValue = e.target.value;
        this.props.changeTitle({id, newValue})
    };

    handleChangeTitleColumn = (value, id) => {
        const titles = this.props.columnsTitleList.columnsTitleList;
        let titlesTemplate = null;

        titlesTemplate = titles.map(function(title) {
            if (title.columnId === id) {
                title.title = value
            }
            return title
        });

        const serialTitles = JSON.stringify(titlesTemplate);
        localStorage.setItem('titles', serialTitles);

        this.props.changeTitleAction(titlesTemplate);
    }

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

const mapStateToProps = store => {
    return {
        user: store.user,
        cardsList: store.cards,
        commentsList: store.comments,
        columnsTitleList: store.columns,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitleAction: title => dispatch(changeTitle(title)),
        updateCardsAction: cards => dispatch(updateCards(cards)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Column)