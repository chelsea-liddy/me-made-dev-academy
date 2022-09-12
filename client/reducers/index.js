import { combineReducers } from 'redux'

import projects from './projects'
import errMessage from './errMessage'
import loading from './loading'

export default combineReducers({
  projects,
  errMessage,
  loading,
})
