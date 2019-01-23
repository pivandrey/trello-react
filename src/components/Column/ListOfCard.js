import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CardMini from '../Card/CardMini'

import '../../style.css'

class ListOfCard extends Component {
    
  render() {
    const data = this.props.data
    const modal = this.props.modal
    return (
      <div>
        {
          data.map((item) => (
            <CardMini 
              key={item.id} 
              id={item.id} 
              modal={modal} 
              data={item}
            />
          ))
        }
      </div>
    )
  };
}

ListOfCard.propTypes = {
  columnId: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  modal: PropTypes.func.isRequired,
}

export default ListOfCard