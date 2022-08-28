import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Stash from './Stash'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="main">
        <Dashboard />
        <Stash />
      </div>

      <Footer />
    </>
  )
}

export default App
