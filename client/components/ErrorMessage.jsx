import React from 'react'
import { useSelector } from 'react-redux'

const ErrorMessage = () => {
  const errorMessage = useSelector((state) => state.errorMessage)

  return (
    <div className="error">
      {errorMessage}
      <br />
      <br />
      <img
        className="icon"
        alt="thread and scissors"
        src="/images/thread-cut.png"
      />
    </div>
  )
}

export default ErrorMessage
