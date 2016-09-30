import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from './views/Main/Template'
import Home from './views/Main/Home/Home'
import Admin from './views/Main/Admin/Admin'
import store from './store'


const adminOnly = (nextState, replace) => {
  let permissions = store.getState().auth.permissions
  if (permissions) {
    switch (permissions) {
      case !permissions.includes(0):
        console.log('access denied')
        replace({ pathname: '/' })
        break;
      default:

    }
  } else {
    console.log('looks like you need to login')
    replace({ pathname: '/' })  }
}

export const makeRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route
        path="/admin"
        component={Admin}
        onEnter={adminOnly}
      />
    </Route>
  )
}

export default makeRoutes
