import React from 'react'
import { Link } from 'react-router'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link className='logo' to="/">
            Popular
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo application using <a href='https://www.themoviedb.org/'>The Movie Database API</a>.
          </p>
        </footer>
      </div>
    )
  }
}
