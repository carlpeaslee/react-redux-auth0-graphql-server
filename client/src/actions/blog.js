import fetch from 'isomorphic-fetch'
import store from '../store'

export const REQUEST_BLOG_CONTENT = 'REQUEST_BLOG_CONTENT'
export const RECEIVED_BLOG_CONTENT = 'RECEIVED_BLOG_CONTENT'
export const OPTIMISTICALLY_ADD_BLOG_POST = 'OPTIMISTICALLY_ADD_BLOG_POST'
export const RECEIVED_RESULT_OF_NEW_BLOG_POST = 'RECEIVED_RESULT_OF_NEW_BLOG_POST'


export function updateBlogContent() {
  const graphqlUrl = '/graphql'
  const body = JSON.stringify({
    query:'{getAllBlogPosts{title,author,publicationDate,featuredImage,content}}',
  })

  let idToken = store.getState().auth.idToken
  console.log(idToken)

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + idToken,
    },
    body: body,
    credentials: 'include'
  }
  return function (dispatch) {
    dispatch(requestBlogContent())

    return fetch(graphqlUrl, options).then((res) => {
      return res.json()
    }).then((response) => {
      let blogPosts = response.data.getAllBlogPosts
      console.log(blogPosts)
      dispatch(receivedBlogContent(blogPosts))
    })
  }
}

export function requestBlogContent() {
  return {
    type: REQUEST_BLOG_CONTENT,
  }
}

export function receivedBlogContent(response) {

  return {
    type: RECEIVED_BLOG_CONTENT,
    blogContent: response,
    receivedAt: Date.now()
  }
}

export function createNewBlogPost(blogPostEditorForm) {

  const graphqlUrl = '/graphql'

  let body = JSON.stringify({
    query: 'mutation {addBlogPost(title:"'+blogPostEditorForm.title+'", author: "'+blogPostEditorForm.more+'", publicationDate: "'+blogPostEditorForm.publicationDate+'", featuredImage: "'+blogPostEditorForm.featuredImage+'", content:"'+blogPostEditorForm.content+'")}'
  })

  let idToken = store.getState().auth.idToken
  console.log(idToken)

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + idToken,
    },
    body: body,
    credentials: 'include'
  }

  return function (dispatch) {
    dispatch(optimisticallyAddBlogPost(blogPostEditorForm))
    return fetch(graphqlUrl, options).then((res) => {
      return res.json()
    }).then((response) => {
      dispatch(receivedResultOfNewBlogPost(response.data))
    })
  }
}

export function optimisticallyAddBlogPost(blogPostEditorForm) {
  return {
    type: OPTIMISTICALLY_ADD_BLOG_POST,
    optimisticPost: blogPostEditorForm
  }
}

export function receivedResultOfNewBlogPost(data) {
  console.log('receivedResultOfNewBlogPost: ',data)
  return {
    type: RECEIVED_RESULT_OF_NEW_BLOG_POST
  }
}
