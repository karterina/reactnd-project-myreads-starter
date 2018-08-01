import React, { Component } from 'react'
import ControlButton from './ControlButton.js'

class Book extends React.Component {

  render() {

    return <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
        <div className="book-shelf-changer">
          <ControlButton book = {this.props.book} updateLocation = {this.props.updateLocation}/>
        </div>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>
  }
}

export default Book
