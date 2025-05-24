
interface EducationItemInterface{
    title: string;
    school: String;
    date_start: string;
    date_end: string;
    logo: string
}

function EducationItem(props: EducationItemInterface) {
  return (
    <div>
        <div className="flex flex-row gap-x-4 w-full h-full">
            <img
                className="w-[10rem] h-full"
                src={props.logo}
            />
            <div className="w-full">
                <h2>{props.title}</h2>
                <p className="italic">{props.school}</p>
                <p className="">{props.date_start} - {props.date_end}</p>
            </div>
        </div>
    </div>
  )
}

export default EducationItem