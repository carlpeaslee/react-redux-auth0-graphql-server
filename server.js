import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './data/schema'

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.use('/graphql', expressGraphQL((req) => {
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
