import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout'
import Main from './components/Main'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Main}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
)

export default routes
