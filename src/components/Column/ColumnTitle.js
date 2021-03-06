import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ColumnTitle extends Component {

  render() {
    const { title } = this.props;
    const titleName =
      <textarea
        className={'column__title'}
        name="ColumnTitle"
        cols="20" rows="1"
        onChange = {this.props.changeTitle}
        defaultValue={title}>
      </textarea>

    return(
      <React.Fragment>
        {titleName}
      </React.Fragment>
    )
  }
}

ColumnTitle.propTypes = {
  columnId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default ColumnTitle