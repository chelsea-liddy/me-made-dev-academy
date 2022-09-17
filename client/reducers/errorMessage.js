import { SET_ERROR } from '../actions'

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    default:
      return state
  }
}

export default errorMessage
