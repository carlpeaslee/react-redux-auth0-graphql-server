
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql';

import BlogPost from '../models/BlogPost'
import BlogPostType from '../types/BlogPostType'


const getAllBlogPosts = {
  type: new GraphQLList(BlogPostType),
  args: {
    count: {
      type: GraphQLString
    }
  },
  resolve:  (source, args, context) => {
    console.log('getAllBlogPosts, context:' ,context)
    return new Promise( (resolve, reject) => {
      BlogPost.findAll().then( (result, error) => {
        if (error) console.log(error)
        resolve(result)
      })
    })
  }
}


export default getAllBlogPosts
