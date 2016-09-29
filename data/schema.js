
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql';

import BlogPost from './models/BlogPost'

import addBlogPost from './mutations/addBlogPost'
import createPerson from './mutations/createPerson'

import getAllBlogPosts from './queries/getAllBlogPosts'
import findOnePersonById from './queries/findOnePersonById'

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // viewer: {
    //   type: new GraphQLNonNull(GraphQLString),
    //   resolve(source, args, context) {
    //     return context
    //   }
    // },
    blogPosts: getAllBlogPosts,
    findOnePersonById: findOnePersonById,
  }
})


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    createPerson: {
      type: GraphQLString,
      args: {
        personId: {
          type: GraphQLString
        },
        email: {
          type: GraphQLString
        },
        name: {
          type: GraphQLString
        },
        permissions: {
          type: GraphQLString
        },
      },
      resolve(source, args, context) {
        createPerson(args.personId, args.email, args.name, args.permissions)
        return "person created good job!"
      }
    },
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
      resolve(source, args, context) {
        console.log('schema, RootMutation, context:' , context)
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
