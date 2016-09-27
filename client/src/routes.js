import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from './views/Main/Template'
import Home from './views/Main/Home/Home'
import Admin from './views/Main/Admin/Admin'
import store from './store'


const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.idToken) {
    console.log('access denied')
    replace({ pathname: '/' })
  }
}

export const makeRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route
        path="/admin"
        component={Admin}
        onEnter={requireAuth}
      />
    </Route>
  )
}

export default makeRoutes
