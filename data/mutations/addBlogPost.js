import sequelize from '../sequelize'
import BlogPost from '../models/BlogPost'


function addBlogPost(title, author, publicationDate, featuredImage, content) {
  BlogPost.build({
    title,
    author,
    publicationDate,
    featuredImage,
    content
  })
  .save()
  .then( (anotherTask) => {
    return "wow success!"
  })
  .catch( (error) => {
    console.log(error)
  })
}

export default addBlogPost
