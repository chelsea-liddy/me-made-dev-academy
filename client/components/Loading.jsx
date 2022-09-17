import React from 'react'
import { connect } from 'react-redux'

const Loading = (props) => {
  return props.loading ? (
    <img
      style={{ width: '30px', height: '30px' }}
      src="/images/loading.gif"
      alt="thread in alternating colours"
    />
  ) : null
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(Loading)
