import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Projects from './Projects'
import Project from './Project'
import Stash from './Stash'
import AddProject from './AddProject'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/project/add" element={<AddProject />} />
          <Route path="/stash" element={<Stash />} />
        </Routes>
      </div>
    </>
  )
}

export default App
