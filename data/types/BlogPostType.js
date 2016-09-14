import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  fields: {
    title: {
      type: GraphQLString
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
});

export default BlogPostType;
