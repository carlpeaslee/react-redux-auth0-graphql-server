
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
  name: 'RootQuery',
  fields: {
    getAllBlogPosts: getAllBlogPosts,
    findOnePersonById: findOnePersonById,
  }
})


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    createPerson: createPerson,
    addBlogPost:addBlogPost,
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
