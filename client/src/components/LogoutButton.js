import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'

export class LogoutButton extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  // constructor(props, context) {
  //   super(props, context)
    // this.state = {
    //   profile: props.auth.getProfile()
    // }
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({profile: newProfile})
    // })
  // }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/');
  }

  render(){
    // const { profile } = this.state
    return (
      <div>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    )
  }
}

export default LogoutButton
