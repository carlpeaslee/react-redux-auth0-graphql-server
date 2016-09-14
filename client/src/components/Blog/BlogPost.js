import React from 'react'


function BlogPost(props) {
  const pubDate = new Date(Date.parse(props.publicationDate))
  // const content = md.render(props.content)
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{pubDate.toLocaleDateString()}</h4>
      <div>
        {props.content}
      </div>
      {/* <div dangerouslySetInnerHTML={{__html: content}}/> */}
    </div>
  )
}

export default BlogPost
