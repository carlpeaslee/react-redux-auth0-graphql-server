import React, { Component } from 'react'
import { connect } from 'react-redux'

import BlogPostEditor from '../../components/Blog/BlogPostEditor'
import { createNewBlogPost } from '../../actions/blog'

class AdminContainer extends Component {
  // static propTypes = {
  //
  // }
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <BlogPostEditor
          dCreateNewBlogPost={this.props.dCreateNewBlogPost}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogPostEditor: state.blogpostEditor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dCreateNewBlogPost: (blogPostEditorForm) => {
      dispatch(createNewBlogPost(blogPostEditorForm))
    },
  }
}

AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer)

export default AdminContainer
