
interface SkillItemInterface{
    icon: string;
    name: string
}

function SkillItem(props: SkillItemInterface) {
  return (
    <>
        <div className="flex flex-row items-center border-0 rounded-lg shadow-md p-1 gap-x-2 bg-stone-700 hover:bg-stone-800">
            {/* <div className="rounded-lg bg-radial from-cyan-600 via-cyan-800 to-cyan-600 p-2"> */}
            <div className="p-2">
                <img
                    src={props.icon}
                    alt={props.icon}
                    className="w-8 h-8"
                />
            </div>
            {/* </div> */}
            <p className="text-center">{props.name}</p>
        </div>
    </>
  )
}

export default SkillItem
