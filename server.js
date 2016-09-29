import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './data/schema'
import jwt from 'express-jwt'

import db from './data/db'


const app = express();

app.set('port', (process.env.API_PORT || 3001));

var jwtCheck = jwt({
  secret: new Buffer('I0pUctOoTBPPTFVPDy-PPrKahtgumFhqQbQBkZKT-CT9TnLw8OKUA-QJiP7KnRwR', 'base64'),
  audience: 'sSWCy6E3FS5roIKe7fAoC8PyrcQePDsA',
  credentialsRequired: false,
});


import PermissionsHandler from './data/mutations/PermissionsHandler'

function permissionsMiddleware(err, req, res, next){
  const requesterId = req.user.sub || 'unknown'
  PermissionsHandler(requesterId).then( (person) => {
    console.log('person.permissions', person)
    req.permissions = person.permissions
    next()
  })
}

app.use('/graphql', [jwtCheck, permissionsMiddleware], expressGraphQL((req) => {
  return {
    schema,
    graphiql: true,
    context: {
      permissions: req.permissions
    },
    pretty: true
  }
}));



db
  .sync()
  .then(function(err) {
    console.log('It worked!')
  }, function (err) {
    console.log('An error occurred while creating the table:', err)
  })


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
