import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <Link to="/">
        <img
          className="logo"
          src={'./images/memadelogo.JPG'}
          alt="me made logo"
        ></img>
      </Link>
    </div>
  )
}

export default Header
