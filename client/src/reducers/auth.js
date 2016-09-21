import {
  SHOW_LOCK
} from '../actions/auth'

const INITIAL_AUTH_STATE = {
  token: undefined,
  profile: {},
  lockShowing: false
}

export default function auth(state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case SHOW_LOCK: {
      return {
        ...state,
        lockShowing: true
      }
    }
    default:
      return state
  }
}
