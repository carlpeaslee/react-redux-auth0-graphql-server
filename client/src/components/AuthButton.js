import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'


function AuthButton(props) {
  if (!props.token) {
    return (
      <LoginButton
        auth={props.auth}
      />
    )
  } else {
    return (
      <LogoutButton
        auth={props.auth}
      />
    )
  }
}

export default AuthButton
