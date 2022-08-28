import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Stash from './Stash'

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Stash" element={<Stash />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
