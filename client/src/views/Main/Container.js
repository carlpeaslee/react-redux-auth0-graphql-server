import React, { PropTypes, Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid} from 'react-bootstrap'

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
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Carl Peaslee</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <main>
          {children}
        </main>
      </Grid>
    )
  }
}

export default Container
