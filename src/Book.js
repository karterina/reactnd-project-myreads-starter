import React, { Component } from 'react'
import ControlButton from './ControlButton.js'

class Book extends React.Component {

  render() {

    const thumbnail = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : '';
    const title = this.props.book.title ? this.props.book.title : 'No title';


    return <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <ControlButton book={this.props.book} updateLocation={this.props.updateLocation}/>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
           </div>
  }
}

export default Book
