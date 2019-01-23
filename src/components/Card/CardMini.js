import React, {Component} from 'react'
import CardTitle from "./CardTitle";
import PropTypes from 'prop-types'

class CardMini extends Component {

  handleClick = () => {
    const { id } = this.props.data;
    this.props.modal(id)
  }
    
  render() {
    const { title, countComments } = this.props.data;
    return(
      <div className={'card_mini'} onClick={this.handleClick} >
        <CardTitle data={title} />
        <p className={'comments-count'}>{countComments}</p>
      </div>
    )
  }
}

CardMini.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  modal: PropTypes.func.isRequired,
}

export default CardMini