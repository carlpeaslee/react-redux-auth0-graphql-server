import sequelize from '../sequelize';

import BlogPost from './BlogPost';

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {BlogPost };
