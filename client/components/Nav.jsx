import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <NavLink to="/" className="nav-link">
            <li className="navbar-item">Projects</li>
          </NavLink>
          <NavLink to="/stash" className="nav-link">
            <li className="navbar-item">Stash</li>
          </NavLink>
          <NavLink to="/inspiration" className="nav-link">
            <li className="navbar-item">Inspiration</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
