import {combineReducers} from 'redux'
import { modelReducer, formReducer } from 'react-redux-form';


import auth from './auth'
import blog from './blog'

const rootReducer = combineReducers({
  blogPostEditor: modelReducer('blogPostEditor'),
  blogPostEditorForm: formReducer('blogPostEditor'),
  auth,
  blog
})

export default rootReducer
