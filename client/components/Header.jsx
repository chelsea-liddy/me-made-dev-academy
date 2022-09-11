import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img
            className="logo"
            src={'./images/memadelogo.JPG'}
            alt="me made"
          ></img>
        </Link>
      </div>
    </div>
  )
}

export default Header
