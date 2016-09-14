import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './data/schema'
import jwt from 'express-jwt'

const app = express();

app.set('port', (process.env.API_PORT || 3001));

var jwtCheck = jwt({
  secret: new Buffer('I0pUctOoTBPPTFVPDy-PPrKahtgumFhqQbQBkZKT-CT9TnLw8OKUA-QJiP7KnRwR', 'base64'),
  audience: 'sSWCy6E3FS5roIKe7fAoC8PyrcQePDsA',
  credentialsRequired: false, 
});



app.use('/graphql', jwtCheck, expressGraphQL((req) => {
  console.log(req.user)
  return {
    schema,
    graphiql: true,
    rootValue: { request: req },
    // pretty: process.env.NODE_ENV !== 'production',
  }
}));


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
