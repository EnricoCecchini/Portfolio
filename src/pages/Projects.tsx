import { v4 as uuidv4 } from "uuid";
import PageTitle from '../components/PageTitle';
import ProjectItem from '../components/ProjectItem';

function Projects() {
    const projects = [
        {
            title: "Local Fiction Reader",
            description: "Locally hosted fanfiction reading and writing webapp, allowing users to write and store their work in a locally hosted database.",
            url: "https://github.com/EnricoCecchini/local_fiction_reader_dockerized",
            cover_image: null,
            tech_stack: [
                "Python", "MySQL", "FastAPI", "React", "Typescript", "TailwindCSS", "Docker"
            ]
        },
        {
            title: "Narrator AI",
            description: "Locally hosted webapp to facilitate AI-narration of text using XTTS and RVC.",
            url: "https://www.url.com",
            cover_image: null,
            tech_stack: [
                "Python", "MySQL", "Flask", "Svelte", "JavaScript", "CSS", 'HTML'
            ]
        },
        {
            title: "Keycard",
            description: "Terminal based local password manager.",
            url: "https://www.url.com",
            cover_image: null,
            tech_stack: [
                "Python", "JSON"
            ]
        },
    ]

    return (
        <>
            <div id="projects"  className="w-full">
                <div className='flex flex-col gap-y-4'>
                    <PageTitle title='Projects' />

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {projects.map((item) => {
                            return <ProjectItem
                                key={uuidv4()}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                cover_image={item.cover_image}
                                tech_stack={item.tech_stack}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects