import React from 'react'
import {Route, IndexRoute} from 'react-router'
import AuthService from '../../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'

const auth = new AuthService('sSWCy6E3FS5roIKe7fAoC8PyrcQePDsA', 'carlpeaslee.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>

      {/* <IndexRedirect to="home" /> */}
      <IndexRoute component={Home} />
      <Route path="/admin" component={Home} onEnter={requireAuth} />
      {/* <Route path="/login" component={Login} />
      <Route path="access_token=:token" component={Login} /> */}
    </Route>
  )
}

export default makeMainRoutes
