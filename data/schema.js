
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql';


import addBlogPost from './mutations/addBlogPost'
import BlogPost from './models/BlogPost'
import getAllBlogPosts from './queries/getAllBlogPosts'

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    blogPosts: getAllBlogPosts
  }
})


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    addBlogPost: {
      type: GraphQLString,
      args: {
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
        }
      },
      resolve(source, args) {
        addBlogPost(args.title, args.author, args.date, args.featuredImage, args.content)
        return "nice job!"
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
