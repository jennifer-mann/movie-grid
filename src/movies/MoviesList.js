import React from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'
import Loader from 'react-loader'

import Movie from './Movie'
import moviesStore from './movies-store'

@observer
export default class MoviesList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: null,
      page: null,
      totalPages: null,
    }
  }

  componentWillMount () {
    moviesStore.getMovies()
    .then((response) => {
      this.setState({
        movies: response.movies,
        totalPages: response.totalPages,
        page: response.page,
      })
      return null
    })
    .catch((err) => {
      console.log(err)
      return null
    })
  }

  render() {
    if (!this.state.movies) return <Loader />

    return (
      <div>
        <ul className='movie-posters'>
          {
            this.state.movies.map((movie) => (
              <Movie
                key={movie.id}
                {...movie}
              />
            ))
          }
        </ul>
      </div>
    )
  }


}
