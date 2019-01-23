import React, {Component} from 'react'
import CardMini from '../Card/CardMini'
import '../../style.css'

class ListOfCard extends Component {

    renderCards = () => {
        const data = this.props.data
        let cardsTemplate = null
        const modal = this.props.modal
        const comments = this.props.comments

        if(data) {
            cardsTemplate = data.map(function (item) {
                return <CardMini key={item.id} id={item.id} modal={modal} data={item} comments={comments} />
            })
        } else return null
        return cardsTemplate
    }

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        )
    };
}

export default ListOfCard