import React from 'react'

import PythonIcon from '../../assets/icons/python.png';
import FastAPIIcon from '../../assets/icons/fastapi.png';
import FlaskIcon from '../../assets/icons/flask.png';
import JavaScriptIcon from '../../assets/icons/javascript.png';
import TypeScriptIcon from '../../assets/icons/typescript.png';
import ReactIcon from '../../assets/icons/react.png';
import MySQLIcon from '../../assets/icons/mysql.png';
import GitIcon from '../../assets/icons/git.png';
import DockerIcon from '../../assets/icons/docker.png';
import VSCodeIcon from '../../assets/icons/vscode.png';
import SkillItem from '../../components/SkillItem';


function Skills() {
    const skill_list = [
        {name: "Python", icon: PythonIcon},
        {name: "FastAPI", icon: FastAPIIcon},
        {name: "Flask", icon: FlaskIcon},
        {name: "JavaScript", icon: JavaScriptIcon},
        {name: "TypeScript", icon: TypeScriptIcon},
        {name: "React", icon: ReactIcon},
        {name: "MySQL", icon: MySQLIcon},
        {name: "Git", icon: GitIcon},
        {name: "Docker", icon: DockerIcon},
        {name: "VSCode", icon: VSCodeIcon},
    ];


    return (
        <>
            <div id="skills" className='w-full flex flex-col items-center justify-center p-4'>
                <div className='flex flex-col'>
                    <h1 className="w-full text-2xl font-bold text-left">Skills</h1>
                    <div className="grid md:grid-cols-5 grid-cols-2 gap-x-4 gap-y-4 grid-flow-row">
                        {skill_list.map((item, index) => {
                            console.log(item)
                            return <SkillItem index={index} icon={item.icon} name={item.name}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills