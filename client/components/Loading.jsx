import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector((state) => state.loading)

  return loading ? (
    <div className="loading">
      <img
        className="loading-icon"
        src="/images/loading.gif"
        alt="thread in alternating colours"
      />
    </div>
  ) : null
}

export default Loading
