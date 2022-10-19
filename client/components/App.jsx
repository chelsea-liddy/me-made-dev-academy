import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Projects from './Projects'
import Project from './Project'
import Stash from './Stash'
import AddProject from './AddProject'
import AddProjectUpdate from './AddProjectUpdate'

const App = () => {
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
      <Footer />
    </>
  )
}

export default App
