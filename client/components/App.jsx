import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Dashboard from './Dashboard'
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/projects/add" element={<AddProject />} />
          <Route path="/stash" element={<Stash />} />
          <Route path="/stash/:id" />
          <Route path="/inspiration" />
          <Route path="/inspiration/:id" />
        </Routes>
      </div>
    </>
  )
}

export default App
