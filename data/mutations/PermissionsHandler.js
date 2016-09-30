import Person from '../models/Person'


function PermissionsHandler(personId) {
  return new Promise ( (resolve, reject) => {
    Person.findOrCreate({
      where: {
        personId: personId
      },
      defaults: {
        name: '',
        email: '',
        permissions: [1]
      }
    }).spread( (result )=> {
      if ( result ){
        resolve(result.dataValues)
      }
    })
  })
}


export default PermissionsHandler
