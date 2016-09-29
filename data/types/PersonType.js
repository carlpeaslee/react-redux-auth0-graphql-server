import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
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
  }
});

export default PersonType;
