import {
  SHOW_LOCK,
  SET_ID_TOKEN,
  LISTEN_FOR_AUTHENTICATION,
  GET_PROFILE,
  SET_PROFILE,
  CHECK_LOCAL_STORAGE,
  LOGOUT
} from '../actions/auth'

const INITIAL_AUTH_STATE = {
  // idToken: null,
  // profile: {},
  // isListeningForAuthentication: null,
}

export default function auth(state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case CHECK_LOCAL_STORAGE: {
      return {
        ...state
      }
    }
    case LISTEN_FOR_AUTHENTICATION: {
      return {
        isListeningForAuthentication: true,
        ...state
      }
    }
    case SHOW_LOCK: {
      return {
        ...state
      }
    }
    case SET_ID_TOKEN: {
      return {
        ...state,
        idToken: action.idToken,
      }
    }
    case GET_PROFILE: {
      return {
        ...state,
        waitingForProfile: action.waitingForProfile,
      }
    }
    case SET_PROFILE: {
      return {
        ...state,
        waitingForProfile: action.waitingForProfile,
        profile: action.profile
      }
    }
    case LOGOUT: {
      return {
        ...state,
        idToken: null,
        profile: null
      }
    }
    default:
      return state
  }
}
