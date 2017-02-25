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
    this._getMovies()

    $(window).on("scroll", () => {
      var scrollHeight = $(document).height()
      var scrollPosition = $(window).height() + $(window).scrollTop()
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        if (this.state.page >= this.state.totalPages) return null

        this._loadMore()
      }
    })
  }

  _getMovies = (page) => {
    moviesStore.getMovies(page)
    .then((response) => {
      this.setState({
        totalPages: response.totalPages,
        page: response.page,
      })

      if (!this.state.movies) {
        this.setState({
          movies: Array.from(response.movies)
        })
      } else {
        this.setState({
          movies: (this.state.movies).concat(Array.from(response.movies))
        })
      }
      return null
    })

    .catch((err) => {
      console.log(err)
      return null
    })
  }


  _loadMore = () => {
    this._getMovies(this.state.page + 1)
  }

  render () {
    if (!this.state.movies) return <Loader />

    return (
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
    )
  }



}
