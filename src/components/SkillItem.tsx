import React from 'react'

interface SkillItemInterface{
    index: number;
    icon: string;
    name: string
}

function SkillItem(props: SkillItemInterface) {
  return (
    <>
        <div key={props.index} className="flex flex-row items-center border-0 border-gray-300 rounded-lg shadow-md p-1 gap-x-2 bg-stone-900 hover:bg-stone-600 hover:animate-bounce">
            <div className="rounded-lg bg-radial from-stone-600 via-stone-800 to-stone-600 p-2">
                <img
                    src={props.icon}
                    alt={props.icon}
                    className="w-4 h-4 m-2"
                />
            </div>
            <p className="text-center">{props.name}</p>
        </div>
    </>
  )
}

export default SkillItem
