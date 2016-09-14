import DataType from 'sequelize';
import Model from '../sequelize';

const BlogPost = Model.define('BlogPost', {

  blogPostId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true
  },

  title: {
    type: DataType.STRING
  },

  author: {
    type: DataType.STRING
  },

  publicationDate: {
    type: DataType.DATE
  },

  featuredImage: {
    type: DataType.STRING
  },

  content: {
    type: DataType.TEXT
  }
});

export default BlogPost
