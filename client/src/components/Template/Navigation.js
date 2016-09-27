import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'
import AuthContainer from '../../containers/Auth/AuthContainer'

function Navigation(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>Carl Peaslee</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
        <LinkContainer to={'/admin'}>
          <NavItem>Admin</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavDropdown title='Auth' id={'auth-dropdown'}>
          <MenuItem>
            <AuthContainer/>
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Navigation
