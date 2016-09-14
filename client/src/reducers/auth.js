import {
  SET_AUTH_TOKEN, SET_PROFILE, REDUX_LOGOUT
} from '../actions/auth'

const INITIAL_AUTH_STATE = {
  token: undefined,
  profile: {}
}

export default function auth(state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:{
      return {
        ...state,
        token: action.token
      }
    }
    case SET_PROFILE:{
      return {
        ...state,
        profile: action.profile
      }
    }
    case REDUX_LOGOUT:{
      return {
        ...state,
        token: action.token,
        profile: action.profile
      }
    }
    default:
      return state
  }
}
