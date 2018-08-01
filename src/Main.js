import React, { Component } from 'react'
import Shelf from './Shelf.js'

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
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>

  }
}

export default Main
