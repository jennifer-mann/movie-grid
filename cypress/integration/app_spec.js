describe('App', function(){

  beforeEach(function(){
    cy
      .server()
      .fixture("movies").as("movies")
  })

  it('displays root route', function(){
    cy
      .route(/movie/, "fx:movies")
      .visit('/')
      .contains('Popular')
  })

  it('displays loading spinner', function(){
    cy
      .route({
        url: /movie/,
        delay: 5000,
        response: "fx:movies"
      })
      .visit('/')
      .get(".loader")
  })

  context('movies list', function(){
    beforeEach(function(){
      cy
        .route(/movie/, "fx:movies").as("getMovies")
        .visit('/')
        .wait("@getMovies")
    })

    it('displays all movies', function(){
      cy.get(".movie-posters > li").should("have.length", this.movies.results.length)
    })

    it('displays posters', function(){
      cy
        .get(".movie-posters > li").first()
          .find("img")
            .should("have.attr", "src")
              .and("include", this.movies.results[0].poster_path)
    })
  })
})

