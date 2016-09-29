import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql'

const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  description: 'An object that describes a blog post',
  fields: {
    title: {
      type: GraphQLString
    },
    blogPostId: {
      type: GraphQLID
    },
    author: {
      type: GraphQLString
    },
    publicationDate: {
      type: GraphQLString
    },
    featuredImage: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
  }
})

export default BlogPostType
