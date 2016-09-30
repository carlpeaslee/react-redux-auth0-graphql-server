
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
} from 'graphql';

import Person from '../models/Person'
import PersonType from '../types/PersonType'


const getPersonPermissions = {
  type: PersonType,
  args: {
    personId: {
      type: GraphQLString
    }
  },
  resolve:  (source, args, context) => {
    return new Promise( (resolve, reject) => {
      console.log('searching using', args.personId)
      Person.findById(args.personId).then( (result) => {
        console.log('made it into findOnePersonById callback')
        // if (error) {console.log(error)}
        // if (result) {console.log(result)}
        resolve(result)
      })
    })
  }
}


export default getPersonPermissions
