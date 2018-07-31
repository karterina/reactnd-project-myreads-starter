import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends React.Component {
  render() {
    return <div className="bookshelf">
      <h2 className="bookshelf-title" id={this.props.id}>{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { this.props.books
            .filter(book => (book.shelf === this.props.id))
            .map(book => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  }
}

export default Shelf
