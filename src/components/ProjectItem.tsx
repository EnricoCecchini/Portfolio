import React from 'react'

interface ProjectItemInterface {
    title: string;
    description: string;
    url: string;
    cover_image: string | null;
}

function ProjectItem(props: ProjectItemInterface) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ProjectItem