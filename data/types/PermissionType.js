import {
  GraphQLEnumType
} from 'graphql';


const PermissionType = new GraphQLEnumType({
  name: 'permission',
  values: {
    ADMIN: {values: 0},
    BASIC: {values: 1},
    USER: {values: 2},
  }
})

export default PermissionType;
