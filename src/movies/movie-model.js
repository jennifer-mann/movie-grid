import { observable, action } from 'mobx'

export default class Movie {
  @observable id

  constructor (movie) {
    this.id = movie.id
    this.title = movie.title
    this.poster_path = movie.poster_path
  }
}
