import React, {Component, PropTypes} from 'react'
import BlogPost from './BlogPost'

class BlogList extends Component {
  static propTypes = {
    blogContent: PropTypes.array.isRequired,
  }
  constructor(props) {
    super()
  }
  render() {
    const blogContent = this.props.blogContent
    function blogPopulator() {
      const blogs = []
      blogContent.forEach((post, index, blogContent) => {
        blogs.push(
          <BlogPost
            key={Math.random()}
            title={post.title}
            author={post.author}
            publicationDate={post.publicationDate}
            featuredImage={post.featuredImage}
            content={post.content}
          />
        )
      })
      // for (let i = 0; i < blogContent.length; i++) {
      //   let post = blogContent[i]
      //   blogs.push(
      //     <BlogPost
      //       key={Math.random()}
      //       title={post.title}
      //       author={post.author}
      //       publicationDate={post.publicationDate}
      //       featuredImage={post.featuredImage}
      //       content={post.content}
      //     />
      //   )
      // }
      return blogs
    }
    return (
      <div>
        {blogPopulator()}
      </div>
    )
  }
}

export default BlogList
