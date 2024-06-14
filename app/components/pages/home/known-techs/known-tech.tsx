'use client'

import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandLaravel,
    TbBrandMysql,
    TbBrandPhp,
    TbBrandGit, TbBrandNodejs,
} from 'react-icons/tb'
import {
    BiLogoJava,
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoPython,
} from 'react-icons/bi'

type KnownTechProps = {
    tech: {
        icon: string
        name: string
        timing: string
    }
}

function GetIcons({name}: { name: string }) {
    switch (name) {
        case 'php':
            return <TbBrandPhp size={30}/>
        case 'laravel':
            return <TbBrandLaravel size={30}/>
        case 'python':
            return <BiLogoPython size={30}/>
        case 'java':
            return <BiLogoJava size={30}/>
        case 'mysql':
            return <TbBrandMysql size={30}/>
        case 'git':
            return <TbBrandGit size={30}/>
        case 'postgresql':
            return <BiLogoPostgresql size={30}/>
        case 'mongodb':
            return <BiLogoMongodb size={30}/>
        case 'react':
            return <TbBrandReact size={30}/>
        case 'next':
            return <TbBrandNextjs size={30}/>
        case 'node':
            return <TbBrandNodejs size={30}/>
        default:
            return <BiLogoPython size={30}/>
    }
}


export const KnownTech = ({tech}: KnownTechProps) => {
    let dateNow = new Date()
    let date = new Date('2023-01-01')
    let diff = date.getTime() - dateNow.getTime()
    let days = Math.floor(diff / (1000 * 60 * 60 * 24))



    //Todo: add timing in the tech object
    return (
        <div
            className="p-6 rounded-lg bg-gray-600/20  justify-between text-gray-500 flex hover:text-purple-500 hover:bg-gray-600/30 transition-all">
            <div className="block items-center">
                <p className="font-medium">{tech.name}</p>
                <span>{tech.timing}</span>
            </div>
            <GetIcons name={tech.icon}/>
        </div>
    )
}
