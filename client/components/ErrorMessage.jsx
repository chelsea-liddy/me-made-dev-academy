import React from 'react'
import { useSelector } from 'react-redux'

const ErrorMessage = () => {
  const errorMessage = useSelector((state) => state.errorMessage)
  return (
    <>
      <p style={{ color: 'red', backgroundColor: 'pink' }}>{errorMessage}</p>
    </>
  )
}

export default ErrorMessage
