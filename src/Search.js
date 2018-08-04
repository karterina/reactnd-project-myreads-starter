import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class Search extends React.Component {

  state = {
    query: '',
    searchedBooks: []
  }

  // setting state with the input
  // calling fetch books on every query change
  updateQuery = (query) => {
    this.setState({ query: query });
    this.fetchSearchedBooks(query)
  }
  // based on study jam
  fetchSearchedBooks = (query) => {
    if (query) {
      // method from BooksAPI
      BooksAPI.search(query).then((fetchedBooks) => {
        if (fetchedBooks.error) {
          this.setState({searchedBooks: []})
        } else {
          this.setState({searchedBooks: fetchedBooks} )
        }
      })
    } else {
      this.setState({searchedBooks: []})
    }
  }

  render() {

    return <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/">Close</Link>
        <div className="search-books-input-wrapper">

          <input type="text"
                 placeholder="Search by title or author"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
        {/* handling 'no results' scenarion */}
        {this.state.searchedBooks.length == 0 && this.state.query !== '' && (
                <div className='no-results'>
                  <h2>No books found</h2>
                </div>
              )
        }
        <ol className="books-grid">
          {/* mapping over searchedBooks to create each Book instance */}
          {this.state.searchedBooks.map(book => (
          <li key={book.id}>
            <Book book={book} books={this.props.books} updateLocation={this.props.updateLocation}/>
          </li>
          ))}
        </ol>
      </div>
    </div>
  }
}

export default Search
