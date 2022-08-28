import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <Link to="/projects">
            <li className="navbar-item">Projects</li>
          </Link>
          <Link to="/stash">
            <li className="navbar-item">Stash</li>
          </Link>
          <Link to="/inspiration">
            <li className="navbar-item">Inspiration</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
