import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-redux-form'

import { createNewBlogPost } from '../../actions/blog'

// import withStyles from 'isomorphic-style-loader/lib/withStyles'

class BlogPostEditor extends Component {
  static propTypes = {
  }
  constructor(props) {
    super()
  }
  render() {
    let { blogPostEditor } = this.props
    return (
      <div>
        <Form
          model='blogPostEditor'
          onSubmit={(blogPostEditor) => {
            this.props.dispatchCreateNewBlogPost(blogPostEditor)
          }}
        >
          <Field model='blogPostEditor.title'>
            <label>Title</label>
            <input type="text"/>
          </Field>
          <Field model='blogPostEditor.author'>
            <label>Author</label>
            <input type="text"/>
          </Field>
          <Field model='blogPostEditor.publicationDate'>
            <label>Publication Date</label>
            <input type="date"/>
          </Field>
          <Field model='blogPostEditor.featuredImage'>
            <label>Featured Image</label>
            <input type="text"/>
          </Field>
          <Field model='blogPostEditor.content'>
            <label>Content</label>
            <textarea/>
          </Field>
          <button>
            Submit Blog Post
          </button>
        </Form>
      </div>
    )
  }
}

// const selector = (state) => ({ blogPostEditor: state.blogpostEditor })
//
// export default connect(selector)(BlogPostEditor);


const mapStateToProps = (state) => {
  return {
    blogPostEditor: state.blogpostEditor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateNewBlogPost: (blogPostEditorForm) => {
      dispatch(createNewBlogPost(blogPostEditorForm))
    },
  }
}

BlogPostEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostEditor)

export default BlogPostEditor
