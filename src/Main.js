import React, { Component } from 'react'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
// this.props.books - доступ к стейт букс

class Main extends React.Component {
  render() {
    console.log(this.props.books)
    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf updateLocation = {this.props.updateLocation} books={this.props.books} title='Currently Reading' id='currentlyReading'/>
          <Shelf updateLocation = {this.props.updateLocation} books={this.props.books} title='Want to Read' id='wantToRead'/>
          <Shelf updateLocation = {this.props.updateLocation} books={this.props.books} title='Read' id='read'/>
        </div>
      </div>
      <div className="open-search">
        <Link
          to='/search'
          className='add-book'>Add a book</Link>
      </div>
    </div>

  }
}

export default Main
