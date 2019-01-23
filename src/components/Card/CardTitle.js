import React, {Component} from 'react'

class CardTitle extends Component {

  render() {
    const { data : title} = this.props;
    return (
      <div>
        <h3 className={'card-mini__title'}>{title}</h3>
      </div>
    )
  }
}

export default CardTitle