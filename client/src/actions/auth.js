export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const SET_PROFILE = 'SET_PROFILE'
export const REDUX_LOGOUT = 'REDUX_LOGOUT'


export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token
  }
}

export function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile
  }
}

export function reduxLogout() {
  return {
    type: REDUX_LOGOUT,
    token: undefined,
    profile: {}
  }
}
