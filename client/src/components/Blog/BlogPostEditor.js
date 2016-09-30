import React, { Component } from 'react'
import { Form, Field } from 'react-redux-form'


class BlogPostEditor extends Component {
  static propTypes = {
  }
  constructor(props) {
    super()
  }
  render() {
    // let { blogPostEditor } = this.props
    return (
      <div>
        <Form
          model='blogPostEditor'
          onSubmit={(blogPostEditor) => {
            this.props.dCreateNewBlogPost(blogPostEditor)
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

export default BlogPostEditor
