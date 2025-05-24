import { v4 as uuidv4 } from "uuid";


interface WorkItemInterface{
    title: string;
    company: string;
    date_start: string;
    date_end: string;
    description: string
    achievements: string[];
    tech_stack: string[];
}


function WorkItem(props: WorkItemInterface) {
    return (
        <>
            <div className='w-full border-l-1 rounded-lg p-4'>
                <div className='flex flex-col mb-2'>
                    <h2 className='text-2xl font-bold'>{props.title} ({props.company})</h2>
                    <h3 className='text-l'>{props.date_start} - {props.date_end}</h3>
                </div>
                <p >{props.description}</p>
                <ul className='p-2'>
                    {
                        props.achievements.map((item) => {
                            return <li key={uuidv4()} className='my-1 pl-2'>· {item}</li>
                        })
                    }
                </ul>

                <div className='flex flex-row gap-4 p-2 flex-wrap'>
                    {
                        props.tech_stack.map((item) => {
                            return (
                                <div key={uuidv4()} className='px-2 bg-blue-500 rounded-2xl'>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default WorkItem