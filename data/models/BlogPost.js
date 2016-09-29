import sequelize from 'sequelize';
import db from '../db';

const BlogPost = db.define('BlogPost', {

  blogPostId: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true
  },

  title: {
    type: sequelize.STRING
  },

  author: {
    type: sequelize.STRING
  },

  publicationDate: {
    type: sequelize.DATE
  },

  featuredImage: {
    type: sequelize.STRING
  },

  content: {
    type: sequelize.TEXT
  }
});

export default BlogPost
