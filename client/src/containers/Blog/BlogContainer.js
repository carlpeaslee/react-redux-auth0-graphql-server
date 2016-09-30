import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import BlogList from '../../components/Blog/BlogList'
import {updateBlogContent} from '../../actions/blog'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'

class BlogContainer extends Component {
  static propTypes = {
    blogContent: PropTypes.array.isRequired,
    dispatchUpdateBlogContent: PropTypes.func.isRequired
  }
  constructor(props) {
    super()
    props.dispatchUpdateBlogContent()
  }
  render() {
    const blogContent = this.props.blogContent
    return (
      <div>
        <BlogList
          blogContent={blogContent}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogContent: state.blog.blogContent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdateBlogContent: () => {
      dispatch(updateBlogContent())
    },
  }
}

BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogContainer)

export default BlogContainer
