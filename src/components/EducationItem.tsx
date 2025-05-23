
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
        <div className="flex flex-row gap-x-2">
            <div className="">
                <img
                    className=""
                    src={props.logo}
                />
            </div>
            <div className="">
                <h2>{props.title}</h2>
                <p className="italic">{props.school}</p>
                <p className="">{props.date_start} - {props.date_end}</p>
            </div>
        </div>
    </div>
  )
}

export default EducationItem