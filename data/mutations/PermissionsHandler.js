import Person from '../models/Person'


function PermissionsHandler(user) {
  return new Promise ( (resolve, reject) => {
    Person.findOrCreate({
      where: {
        personId: user.personId
      },
      defaults: {
        name: '',
        email: '',
        permissions: [1]
      }
    }).spread( (result )=> {
      if ( result ){
        console.log('result of PermissionsHandler', result.dataValues)
        resolve(result.dataValues)
      }
    })
  })
}


export default PermissionsHandler
