import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="main"></div>
      <Footer />
    </>
  )
}

export default App
