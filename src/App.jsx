import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='bg-gray-100 min-h-[100vh]'>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App