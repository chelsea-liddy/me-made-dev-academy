import { combineReducers } from 'redux'

import projects from './projects'
import errorMessage from './errorMessage'
import loading from './loading'

export default combineReducers({
  projects,
  errorMessage,
  loading,
})
