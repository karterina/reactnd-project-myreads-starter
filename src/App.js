import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main.js'
import Search from './Search.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  // based on Udacity's React Fundamentals course
  componentDidMount() {
    // books API method from readme
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateLocation = (book, shelf) => {
    // books API method from readme
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      let listBooks = this.state.books.filter(aBook => (aBook.id !== book.id));
      listBooks.push(book);
      this.setState({books: listBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render = {() => (
          <Main books={this.state.books} updateLocation = {this.updateLocation}/>
        )}/>
        <Route path="/search" render = {() => (
          <Search books={this.state.books} updateLocation = {this.updateLocation}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
