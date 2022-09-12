import { SET_ERROR } from '../actions'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    default:
      return state
  }
}

export default reducer
