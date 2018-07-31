import React, { Component } from 'react'
import Shelf from './Shelf.js'

// this.props.books - доступ к стейт букс

class Main extends React.Component {
  render() {
    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          //doesn't work like this
          <Shelf books={this.state.books} title='Currently Reading' id='currentlyReading'/>
          <Shelf books={this.state.books} title='Want to Read' id='wantToRead'/>
          <Shelf books={this.state.books} title='Read' id='read'/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>

  }
}

export default Main
