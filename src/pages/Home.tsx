import React from 'react'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'
import Work from './Work'
import Navbar from '../components/Navbar'
import Education from './Education'
import Contact from './Contact'

function Home() {
  return (
    <>
        <div className='flex flex-col gap-y-2 w-full items-center'>
            <Navbar />

            <div className='flex lg:flex-row align-top flex-wrap'>
                <Contact />
                <div className='lg:w-[65%] px-4 items-center flex flex-col gap-y-8'>
                    <About />
                    <Skills />
                    <Work />
                    <Education />
                    <Projects />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home