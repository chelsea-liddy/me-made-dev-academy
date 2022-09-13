import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src={'./images/memadelogo.JPG'}
          alt="me made"
        ></img>
      </Link>
      <img
        className="icon"
        src={'./images/knitting.png'}
        alt="yarn ball and needles"
      ></img>
      <img
        className="icon"
        src={'./images/thread.png'}
        alt="thread spool"
      ></img>
    </div>
  )
}

export default Header
