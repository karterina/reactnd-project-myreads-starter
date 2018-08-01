import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main.js'
import Search from './Search.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  // based on Udacity's React Fundamentals course
  componentDidMount() {
    // books API method from readme
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateLocation = (book, shelf) => {
    // books API method from readme
    BooksAPI.update(book, shelf)
  }
  
  render() {
    return (
      <div className="app">
        <Main books={this.state.books} updateLocation = {this.updateLocation}/>
      </div>
    )
  }
}

export default BooksApp
