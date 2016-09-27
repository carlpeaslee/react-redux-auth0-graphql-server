import Auth0Lock from 'auth0-lock'
import {auth0id, auth0domain} from '../config'

import store from '../store'

const lockOptions = {
  auth: {
    redirect: false,
  },
  theme: {
    logo: ''
  }
}

export const lock = new Auth0Lock(auth0id, auth0domain, lockOptions)

export const SHOW_LOCK = "SHOW_LOCK"
export function showLock() {
  lock.show()
  return {
    type: SHOW_LOCK
  }
}

export const SET_ID_TOKEN = 'SET_ID_TOKEN'
export function setIdToken(idToken) {
  localStorage.setItem('idToken', idToken)
  store.dispatch(getProfile(idToken))
  return {
    type: SET_ID_TOKEN,
    idToken
  }
}

export const GET_PROFILE = 'GET_PROFILE'
export function getProfile(idToken) {
  lock.getProfile(idToken, (error, profile) => {
    if (error) {
      console.log('Error loading the Profile', error)
    } else {
      store.dispatch(setProfile(profile))
    }
  })
  return {
    type: GET_PROFILE,
    waitingForProfile: true
  }
}

export const CHECK_LOCAL_STORAGE = 'CHECK_LOCAL_STORAGE'
export function checkLocalStore() {
  let idToken = localStorage.getItem('idToken')
  let profile = localStorage.getItem('profile')
  if (idToken && profile) {
    store.dispatch(setIdToken(idToken))
    store.dispatch(setProfile(profile))
  } else {
    localStorage.removeItem('idToken')
    localStorage.removeItem('profile')
    // store.dispatch(listenForAuthentication())
  }
  return {
    type: CHECK_LOCAL_STORAGE,
  }
}

export const SET_PROFILE = 'SET_PROFILE'
export function setProfile(profile) {
  localStorage.setItem('profile', profile)
  return {
    type: SET_PROFILE,
    waitingForProfile: false,
    profile
  }
}

export const LISTEN_FOR_AUTHENTICATION = 'LISTEN_FOR_AUTHENTICATION'
export function listenForAuthentication(){
  lock.on('authenticated', (authResult) => {
    let idToken = authResult.idToken
    store.dispatch(setIdToken(idToken))
    localStorage.setItem('idToken', idToken)
  })
  lock.on('authorization_error', (error) => {
    console.log('uh oh auth error', error)
  })
  return {
    type: LISTEN_FOR_AUTHENTICATION,
    isListeningForAuthentication: true,
  }
}

export const RECEIVE_AUTHENTICATION = "RECEIVE_AUTHENTICATION"
