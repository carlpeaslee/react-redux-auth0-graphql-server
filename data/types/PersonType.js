import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql'

import PermissionsType from './PermissionsType'


const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'A user in the database',
  fields: {
    personId: {
      type: GraphQLID
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    permissions: {
      type: PermissionsType
    },
  }
})

export default PersonType
