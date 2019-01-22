import React, {Component} from 'react'

class CardCommentsCount extends Component {

    countComments = () => {
        const id = this.props.countComments
        return (
            <p className={'comments-count'}>{id}</p>
        )
    }

    render() {

        return (
            <React.Fragment>
                {this.countComments()}
            </React.Fragment>
        )
    }
}

export default CardCommentsCount