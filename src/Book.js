import React, { Component } from 'react'
import ControlButton from './ControlButton.js'

class Book extends React.Component {

  render() {

    {/* handling errors when thumbnail, title or authors are not available */}
    const thumbnail = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : '';
    const title = this.props.book.title ? this.props.book.title : '';
    const authors = this.props.book.authors ? this.props.book.authors: '';

    return <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  {/* a control button is tied to each Book instance */}
                  <ControlButton book={this.props.book} books={this.props.books} updateLocation={this.props.updateLocation}/>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors}</div>
           </div>
  }
}

export default Book
