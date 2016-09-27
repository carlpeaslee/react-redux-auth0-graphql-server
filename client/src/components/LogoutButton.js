import React from 'react'
import {Button} from 'react-bootstrap'

function LogoutButton(props) {
  return (
    <Button
      onClick={props.dLogout}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
