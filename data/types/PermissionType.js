import {
  GraphQLEnumType,
  GraphQLInt
} from 'graphql';


// const PermissionType = new GraphQLEnumType({
//   name: 'Permission',
//   values: {
//     ADMIN: {values: 0},
//     BASIC: {values: 1},
//     USER: {values: 2},
//   }
// })

const PermissionType = GraphQLInt

export default PermissionType;
