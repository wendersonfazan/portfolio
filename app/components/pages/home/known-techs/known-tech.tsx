'use client'

import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandLaravel,
    TbBrandMysql,
    TbBrandPhp,
    TbBrandGit,
    TbBrandNodejs,
} from 'react-icons/tb'
import {
    BiLogoJava,
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoPython,
} from 'react-icons/bi'
import {useTranslations} from "next-intl";

type KnownTechProps = {
    tech: {
        icon: string
        name: string
        timing: string
        startDate: string
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
    const translateCommons = useTranslations('common')

    let dateNow = new Date()
    let date = new Date(tech.startDate)
    let diff = date.getTime() - dateNow.getTime()
    let years = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24 * 365)))
    let message = years > 1 ? `${years} ${translateCommons('years')}` : `${years} ${translateCommons('year')}`

    return (
        <div
            className="p-6 rounded-lg bg-gray-600/20  justify-between text-gray-500 flex hover:text-purple-500 hover:bg-gray-600/30 transition-all">
            <div className="block items-center">
                <p className="font-medium">{tech.name}</p>
                <span>{message}</span>
            </div>
            <GetIcons name={tech.icon}/>
        </div>
    )
}
