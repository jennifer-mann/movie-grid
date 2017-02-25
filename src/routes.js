import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout'
import MoviesList from './movies/MoviesList'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={MoviesList}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
)

export default routes
