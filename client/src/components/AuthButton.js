import React from 'react'


function authButton(props) {
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

export default BlogPost
