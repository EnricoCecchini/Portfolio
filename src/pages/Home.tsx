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
        <div className='flex flex-col gap-y-2 w-full items-center bg-neutral-900 text-white text-xl'>
            <Navbar />

            <div className='w-full flex lg:flex-row align-top flex-wrap'>
                <Contact />
                <div className='lg:w-[75%] px-4 items-center'>
                    <div className='w-full flex flex-col gap-y-8'>
                        <About />
                        <Skills />
                        <Work />
                        <Education />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home