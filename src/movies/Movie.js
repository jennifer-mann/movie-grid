import React from 'react'

export default class Movie extends React.Component {
  render() {
    return (
      <li>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`} />
      </li>
    )
  }
}
