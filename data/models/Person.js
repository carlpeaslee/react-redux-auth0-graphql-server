import sequelize from 'sequelize';
import db from '../db';

const Person = db.define('Person', {

  personId: {
    type: sequelize.STRING,
    primaryKey: true,
    notNull: true,
  },

  email: {
    type: sequelize.STRING,
    isEmail: true,
    notNull: true,
  },

  name: {
    type: sequelize.STRING,
    notNull: true,
  },

  permissions: {
    type: sequelize.ARRAY(sequelize.STRING),
    defaultValue: ['read'],
    notNull: true,
  },

});

export default Person
