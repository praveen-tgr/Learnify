import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './pages/Hero'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Courses/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App