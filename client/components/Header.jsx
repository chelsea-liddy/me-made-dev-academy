import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Nav />
        <Link to="/">
          <img
            className="logo"
            src={'./images/memadelogo.JPG'}
            alt="me made"
          ></img>
        </Link>
        <div className="emptyDiv"></div>
      </div>
    </div>
  )
}

export default Header
