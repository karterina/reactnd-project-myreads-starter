import React, { Component } from 'react'

class ControlButton extends React.Component {
  render () {

    const books = this.props.books;
    const book = this.props.book;

    // setting the value of the select to the shelf of the book or creating the shelf
    // attribute and setting it to none for the searched books
    let shelf = book.shelf ? book.shelf : book.shelf = 'none';

    // if a book in the searched books is already on a shelf
    // set the value to the current shelf
    for (let b of books) {
      if (b.id === book.id) {
        shelf = b.shelf;
        break;
      }
    }

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
