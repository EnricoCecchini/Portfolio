import { v4 as uuidv4 } from "uuid";
import PageTitle from '../components/PageTitle';
import ProjectItem from '../components/ProjectItem';

function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
        {
            title: "Project 2",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
        {
            title: "Project 3",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
        {
            title: "Project 4",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
        {
            title: "Project 5",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
        {
            title: "Project 6",
            description: "Project 1 Desc",
            url: "https://www.url.com",
            cover_image: "abc.png"
        },
    ]

    return (
        <>
            <div id="projects"  className="w-full">
                <div className='flex flex-col'>
                    <PageTitle title='Projects' />

                    <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-4'>
                        {projects.map((item) => {
                            return <ProjectItem
                                key={uuidv4()}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                cover_image={item.cover_image}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects