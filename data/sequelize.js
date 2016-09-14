import Sequelize from 'sequelize';
import {DBHost, DBUser, DBPw, DBName, DBSsl } from './dbconfig';

// const databaseUrl = 'sqlite:database.sqlite'

const sequelize = new Sequelize(DBName, DBUser, DBPw, {
  host: DBHost,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    freezeTableName: true,
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
});



export default sequelize;
