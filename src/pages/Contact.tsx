import { v4 as uuidv4 } from "uuid";
import { Logos } from '../components/Logos';
import PageTitle from '../components/PageTitle';
import ProfileImage from '../assets/images/profile_pic.png'

function Contact() {
    const data = {
        name: "Enrico Cecchini Rivera",
        title: "Software Engineer",
        location: "Monterrey, Nuevo León, México",
        tagline: "Building fun stuff.",
        socials: [
            {name: "Github", icon: Logos.GITHUB, url: "https://github.com/EnricoCecchini"},
            {name: "Linkedin", icon: Logos.LINKEDIN, url: "https://www.linkedin.com/in/enricocr/"},
        ]
    }

    return (
        <div id="contact" className='lg:w-[20%] sm:w-full flex flex-col px-4 lg:items-center pb-4'>
            <div className='flex flex-col gap-y-1'>
                <div className="flex flex-row justify-center">
                    <img
                        src={ProfileImage}
                        className="w-64 rounded-2xl"
                    />
                </div>
                <PageTitle title={data.name} />
                <p className='text-l text-gray-300'>🖥️ <span className='underline'>{data.title}</span></p>
                <p className='text-l text-gray-300'>📍 {data.location}</p>
                <div className=''>{data.tagline}</div>
                <div className='flex flex-row items-start gap-x-2 py-2'>
                    {
                        data.socials.map((item) => {
                            return (
                                <a key={uuidv4()} href={item.url} className='hover:animate-spin'>
                                    <img
                                        src={item.icon}
                                        className='w-8 h-8'
                                    />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact