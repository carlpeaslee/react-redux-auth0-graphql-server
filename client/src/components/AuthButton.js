import React, {Component} from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

import {connect} from 'react-redux'

import {showLock} from '../actions/auth'


class AuthButton extends Component {

  render() {
    return(
      <div>
        <LoginButton
          showLock={this.props.dispatchShowLock}
        />
        <LogoutButton/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchShowLock: () => {
      dispatch(showLock())
    },
  }
}

AuthButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton)

export default AuthButton
