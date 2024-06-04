'use client'

import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { usePathname } from 'next/navigation'

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
        startDate: string
    }
}

function GetIcons({ name }: { name: string }) {
    if (name === 'php') {
        return <TbBrandPhp size={30} />;
    }
    if (name === 'laravel') {
        return <TbBrandLaravel size={30} />;
    }
    if (name === 'python') {
        return <BiLogoPython size={30} />;
    }
    if (name === 'java') {
        return <BiLogoJava size={30} />;
    }
    if (name === 'mysql') {
        return <TbBrandMysql size={30} />;
    }
    if (name === 'git') {
        return <TbBrandGit size={30} />;
    }
    if (name === 'postgresql') {
        return <BiLogoPostgresql size={30} />;
    }
    if (name === 'mongodb') {
        return <BiLogoMongodb size={30} />;
    }
    if (name === 'react') {
        return <TbBrandReact size={30} />;
    }
    if (name === 'next') {
        return <TbBrandNextjs size={30} />;
    }
    if (name === 'node') {
        return <TbBrandNodejs size={30} />;
    }


}


export const KnownTech = ({ tech }: KnownTechProps) => {
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
            <GetIcons name={tech.icon} />
        </div>
    )
}
