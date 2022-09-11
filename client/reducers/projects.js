import { SET_PROJECTS_SUCCESS } from '../actions'

const projects = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default projects
