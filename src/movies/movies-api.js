import xhr from '../xhr'

module.exports = {
  getMovies (page) {

    return xhr({
      method: 'get',
      url: `/3/movie/popular?api_key=1317be02a72447fa543397395acabd53${page ? `&page=${page}` : ''}`
    })
  },
}
