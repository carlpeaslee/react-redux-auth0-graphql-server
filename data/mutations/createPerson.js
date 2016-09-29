import Person from '../models/Person'


function createPerson(personId, email, name, permissions) {
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
