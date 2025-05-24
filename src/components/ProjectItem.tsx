import { v4 as uuidv4 } from "uuid";

interface ProjectItemInterface {
    title: string;
    description: string;
    url: string;
    cover_image: string | null;
    tech_stack: string[]
}

function ProjectItem(props: ProjectItemInterface) {
    return (
        <div>
            <div className="flex flex-col w-full gap-y-2 p-4 border-1 rounded-lg h-full">
                {
                    props.cover_image
                    ? <img
                        className="lg:max-w-[45rem] rounded-4xl"
                        src={props.cover_image}
                    />
                    : <></>
                }
                <h2 className="text-2xl underline text-center">{props.title}</h2>
                <p className="italic text-lg text-wrap">{props.description}</p>
                <a className="text-md italic hover:text-blue-500 w-fit" href={props.url}>See more...</a>

                <div className='flex flex-row gap-4 py-2 flex-wrap w-full'>
                    {
                        props.tech_stack.map((item) => {
                            return (
                                <div key={uuidv4()} className='px-2 bg-blue-500 rounded-2xl'>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectItem