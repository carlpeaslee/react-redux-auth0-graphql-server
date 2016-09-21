import Auth0Lock from 'auth0-lock'
import {auth0id, auth0domain} from '../config'

// import store from '../store'

const lockOptions = {
  container: 'authDiv'
}

const lock = new Auth0Lock(auth0id, auth0domain, lockOptions)

export const SHOW_LOCK = "SHOW_LOCK"
export function showLock() {
  lock.show()
  return {
    type: SHOW_LOCK
  }
}

export const RECEIVE_AUTHENTICATION = "RECEIVE_AUTHENTICATION"
