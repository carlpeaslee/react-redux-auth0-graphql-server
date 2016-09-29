import {
  GraphQLList,
} from 'graphql';

import PermissionType from './PermissionType'

const PermissionsType = new GraphQLList(PermissionType)

export default PermissionsType;
