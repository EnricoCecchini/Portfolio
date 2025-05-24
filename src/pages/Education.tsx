
import { v4 as uuidv4 } from "uuid";
import EducationItem from '../components/EducationItem';
import { Logos } from '../components/Logos';
import PageTitle from '../components/PageTitle';


function Education() {
    const educations = [
        {
            title: "Ingeniería en Tecnología Computacional",
            school: "Universidad de Monterrey",
            date_start: "2019-01",
            date_end: "2023-05",
            logo: Logos.UDEM
        },
    ]

    return (
        <div id="education" className='w-full flex flex-col'>
            <div className='flex flex-col gap-y-4'>
                <PageTitle title='Education' />
                {educations.map((item) => {
                    return <EducationItem
                        key={uuidv4()}

                        title={item.title}
                        school={item.school}
                        date_start={item.date_start}
                        date_end={item.date_end}
                        logo={item.logo}
                    />
                })}
            </div>
        </div>
    )
}

export default Education