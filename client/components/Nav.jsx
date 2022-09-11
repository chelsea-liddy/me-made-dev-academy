import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <Link to="/projects" className="nav-link">
            <li className="navbar-item">Projects</li>
          </Link>
          <Link to="/stash" className="nav-link">
            <li className="navbar-item">Stash</li>
          </Link>
          <Link to="/inspiration" className="nav-link">
            <li className="navbar-item">Inspiration</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
