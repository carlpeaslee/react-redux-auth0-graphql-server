import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from './views/Main/Template'
import Home from './views/Main/Home/Home'
import Admin from './views/Main/Admin/Admin'


export const makeRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route path="/admin" component={Admin}/>
    </Route>
  )
}

export default makeRoutes
