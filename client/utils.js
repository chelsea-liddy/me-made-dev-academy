import { useSelector } from 'react-redux'

export function isError() {
  const error = useSelector((state) => state.errorMessage)
  if (error == null) {
    return false
  } else {
    return true
  }
}
