import React, { Component} from 'react'
import {Grid, Row} from 'react-bootstrap'
import Navigation from '../../components/Template/Navigation'

class Template extends Component {

  render() {

    return (
      <Grid>
        <Row>
          <Navigation
          />
        </Row>
        <main>
          {this.props.children}
        </main>
      </Grid>
    )
  }
}

export default Template
