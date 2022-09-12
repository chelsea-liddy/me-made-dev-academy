import {
  SET_PROJECTS_PENDING,
  SET_PROJECTS_SUCCESS,
  SET_ERROR,
} from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS_PENDING:
      return true

    case SET_PROJECTS_SUCCESS:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
