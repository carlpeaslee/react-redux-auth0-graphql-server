import React, { PropTypes, Component} from 'react'
import {Grid, Row} from 'react-bootstrap'
import Navigation from '../../components/Navigation'

class Container extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <Grid>
        <Row>
          <Navigation
            auth={props.auth}
          />
        </Row>
        <main>
          {children}
        </main>
      </Grid>
    )
  }
}

export default Container
