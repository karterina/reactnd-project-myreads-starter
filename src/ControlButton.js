import React, { Component } from 'react'

class ControlButton extends React.Component {
  render () {

    let shelf = this.props.book.shelf ? this.props.book.shelf : this.props.book.shelf = 'none';

    return <select onChange={(event) => this.props.updateLocation(this.props.book, event.target.value)}
                    value={shelf}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  }
}

export default ControlButton
