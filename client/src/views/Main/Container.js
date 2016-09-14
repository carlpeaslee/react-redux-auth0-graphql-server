import React, { PropTypes as T } from 'react'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <h2>
          <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="a badge"/>
        </h2>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default Container;
