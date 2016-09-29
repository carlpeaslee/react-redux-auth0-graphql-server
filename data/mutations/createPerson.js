import Person from '../models/Person'

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql'

const createPerson = {
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
    buildPerson(args.personId, args.email, args.name, args.permissions)
    return "person created good job!"
  }
}

function buildPerson(personId, email, name, permissions) {
  Person.build({
    personId,
    email,
    name,
    permissions
  })
  .save()
  .then( (anotherTask) => {
    return "wow success!"
  })
  .catch( (error) => {
    console.log(error)
  })
}

export default createPerson
