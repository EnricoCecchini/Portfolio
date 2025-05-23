import React from 'react'

import { Logos } from '../components/Logos'
import PageTitle from '../components/PageTitle'

function About() {
    const data = "I'm a 25 year old software engineer with a knack for building pretty functional apps. I've worked in back-end and front-end, building comprehensive solutions from scratch."

    return (
        <div id="about" className='flex flex-col'>
            <div className='flex flex-col'>
                <PageTitle title="About Me" />

                <div className='w-full'>
                    <p className=''>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default About