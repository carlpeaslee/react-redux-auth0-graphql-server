import React, {Component} from 'react'
import LoginButton from '../../components/LoginButton'
import LogoutButton from '../../components/LogoutButton'

import {connect} from 'react-redux'

import {checkLocalStore, showLock, listenForAuthentication} from '../../actions/auth'

class AuthContainer extends Component {
  componentWillMount() {
    if (!this.props.idToken && !this.props.isListeningForAuthentication){
      this.props.dCheckLocalStorage()
    }
    if (!this.props.idToken && !this.props.isListeningForAuthentication){
      this.props.dListenForAuthentication()
    }
  }
  authDisplay() {
    if(this.props.profile) {
      return (
        <div>
          <p>Hi, {this.props.profile.name}!</p>
          <LogoutButton/>
        </div>
      )
    } else {
      return (
        <LoginButton
          dShowLock={this.props.dShowLock}
        />
      )
    }
  }
  render() {
    return(
      <div>
        {this.authDisplay()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    idToken: state.auth.idToken,
    isListeningForAuthentication: state.auth.isListeningForAuthentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dShowLock: () => {
      dispatch(showLock())
    },
    dListenForAuthentication: () => {
      dispatch(listenForAuthentication())
    },
    dCheckLocalStorage: () => {
      dispatch(checkLocalStore())
    },
  }
}

AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)

export default AuthContainer
