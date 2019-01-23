import React, {Component} from 'react'
import CardTitle from "./CardTitle";
import PropTypes from 'prop-types'

class CardMini extends Component {

    handleClick = () => {
        const { id } = this.props.data;
        this.props.modal(id)
    }

    calculateComments = () => {
        const { id } = this.props.data;
        const { commentsCounter } = this.props;
        const countOfComments = commentsCounter.filter(function(count) {
            return count.id === id
        })
        return countOfComments[0].count;
    }

    render() {

        const { title } = this.props.data;
        console.log(this.props.data.id)
        return(
            <div className={'card_mini'} onClick={this.handleClick} >
                <CardTitle data={title} />
                <p className={'comments-count'}>{this.calculateComments()}</p>
            </div>
        )
    }
}

CardMini.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    modal: PropTypes.func.isRequired,
    commentsCounter: PropTypes.array.isRequired,
}

export default CardMini