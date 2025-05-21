import React from 'react'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'
import Work from './Work'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
        <Navbar />
        <div className='flex flex-col gap-y-2'>
            <About />
            <Skills />
            <Work />
            <Projects />
        </div>
    </>
  )
}

export default Home