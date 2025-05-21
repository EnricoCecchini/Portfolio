import React from 'react'
import ProjectItem from '../../components/ProjectItem'

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
            <div id="projects"  className="flex flex-row w-full">
                <div className='flex flex-col'>
                    <h1>Projects</h1>

                    <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-4'>
                        {projects.map((item, index) => {
                            return <ProjectItem
                                key={index}
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