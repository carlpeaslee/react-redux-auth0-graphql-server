import React from 'react'
import {Button} from 'react-bootstrap'

function LoginButton(props) {
  return (
    <Button
      onClick={props.dShowLock}
    >
      Login
    </Button>
  )
}

export default LoginButton;
