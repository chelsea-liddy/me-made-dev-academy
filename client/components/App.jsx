import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Projects from './Projects'
import Project from './Project'
import Stash from './Stash'
import AddProject from './AddProject'
import AddProjectUpdate from './AddProjectUpdate'
import { ThemeContext, themes } from '../contexts/ThemeContext'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Header />

      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/project/:id/update" element={<AddProjectUpdate />} />
          <Route path="/project/add" element={<AddProject />} />
          <Route path="/stash" element={<Stash />} />
        </Routes>
      </div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            onClick={() => {
              setDarkMode(!darkMode)
              changeTheme(darkMode ? themes.light : themes.dark)
            }}
          >
            Dark Mode
          </button>
        )}
      </ThemeContext.Consumer>
      <Footer />
    </>
  )
}

export default App
