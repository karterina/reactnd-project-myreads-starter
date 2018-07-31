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
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        <Main books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
