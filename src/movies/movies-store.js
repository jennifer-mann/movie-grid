import { observable, action } from 'mobx'

import api from './movies-api'
import Movie from './movie-model'

class Movies {
  @observable movies = []
  @observable totalPages
  @observable page

  @action getMovies (page) {
    return api.getMovies(page)
    .then(action('got:movies', (response) => {
      this.movies = _.map(response.results, (movie) => {
        return new Movie(movie)
      })

      this.page = response.page
      this.totalPages = response.total_pages

      return(this)
    }))
  }
}

export default new Movies()
