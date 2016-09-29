import db from '../db'
import BlogPost from './BlogPost'
import Person from './Person'


function sync(...args) {
  return db.sync(...args);
}

export default { sync };
