import {getRelativeTimeString} from '@/app/utils/get-relative-time'
import {useTranslations} from 'next-intl'
import {usePathname} from 'next/navigation'
import {ReactNode} from 'react'
import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandLaravel,
    TbBrandMysql,
    TbBrandPhp,
    TbBrandGit,
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
        default:
            return <BiLogoPython size={30}/>
    }
}


export const KnownTech = ({tech}: KnownTechProps) => {
    const path = usePathname()

    const relativoTime = getRelativeTimeString(
        new Date(tech.startDate),
        path.replace('/', '') === 'pt-BR' ? 'pt-BR' : 'en-US',
    )?.replace('há', '')?.replace('ago', '')
    return (
        <div
            className="p-6 rounded-lg bg-gray-600/20  justify-between text-gray-500 flex hover:text-teal-500 hover:bg-gray-600/30 transition-all">
            <div className="block items-center">
                <p className="font-medium">{tech.name}</p>
                <span>{relativoTime}</span>
            </div>
            <GetIcons name={tech.icon}/>
        </div>
    )
}
