import React from 'react'

import { Logos } from '../../components/Logos';
import PageTitle from '../../components/PageTitle';
import EducationItem from '../../components/EducationItem';

function Education() {
    const educations = [
        {
            title: "Ingeniería en Tecnología Computacional",
            school: "Universidad de Monterrey",
            date_start: "2019-01",
            date_end: "2023-05",
            logo: Logos.UDEM
        }
    ]

    return (
        <div id="education" className='w-full flex flex-col'>
            <div className='flex flex-col gap-y-4'>
                <PageTitle title='Education' />
                <div className="grid md:grid-cols-5 grid-cols-2 gap-x-4 gap-y-4 grid-flow-row">
                    {educations.map((item, index) => {
                        console.log(item)
                        return <EducationItem
                            title={item.title}
                            school={item.school}
                            date_start={item.date_start}
                            date_end={item.date_end}
                            logo={item.logo}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education