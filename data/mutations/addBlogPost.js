import BlogPost from '../models/BlogPost'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql'

const addBlogPost =  {
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
  resolve: (source, args, context) => {
    console.log('addBlogPost context.permissions', context.permissions)
    if(context.permissions.includes(0)) {
      return new Promise ( (resolve, reject) => {
        let result = buildBlogPost(args.title, args.author, args.date, args.featuredImage, args.content)
        resolve(result)
      })
    } else {
      return "sorry you don't have proper permissions to create a blog post"
    }
  }
}


function buildBlogPost(title, author, publicationDate, featuredImage, content) {
  BlogPost.build({
    title,
    author,
    publicationDate,
    featuredImage,
    content
  })
  .save()
  .then( (anotherTask) => {
    return "wow success!"
  })
  .catch( (error) => {
    console.log(error)
  })
}

export default addBlogPost
