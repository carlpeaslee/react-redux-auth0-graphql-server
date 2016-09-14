import { REQUEST_BLOG_CONTENT, RECEIVED_BLOG_CONTENT, OPTIMISTICALLY_ADD_BLOG_POST, RECEIVED_RESULT_OF_NEW_BLOG_POST} from '../actions/blog'

export const INITIAL_BLOG_STATE = {
  blogContent: []
}


export default function blog(state = INITIAL_BLOG_STATE, action) {
  switch (action.type) {
    case REQUEST_BLOG_CONTENT: {
      return {
        ...state,
        awaitingBlogContent: true
      }
    }
    case RECEIVED_BLOG_CONTENT: {
      return {
        ...state,
        blogContent: action.blogContent,
        awaitingBlogContent: false
      }
    }
    case OPTIMISTICALLY_ADD_BLOG_POST: {
      return {
        ...state,
        awaitingResultOfNewBlogPost: true
      }
    }
    case RECEIVED_RESULT_OF_NEW_BLOG_POST: {
      return {
        ...state,
        awaitingResultOfNewBlogPost: false
      }
    }
    default:
      return state
  }
}
