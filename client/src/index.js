import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import App from './containers/App/App'

import {browserHistory} from 'react-router'

import makeRoutes from './routes'

const routes = makeRoutes()

const mountNode = document.getElementById('root')


import { Provider } from 'react-redux';

import store from './store'

ReactDOM.render(
  <Provider store={store}><App history={browserHistory} routes={routes}/></Provider>,
  mountNode
);
