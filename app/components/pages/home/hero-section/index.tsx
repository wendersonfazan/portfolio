'use client'

import {useTranslations} from "next-intl";
import {TechBadge} from '@/app/components/tech-badge'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {ParticleComponent} from '@/app/components/particles/Particules'

import translatedStacks from '@/messages/pt-BR.json'

export const HeroSection = () => {
    const translateHero = useTranslations('HeroSection')
    const translateStacks = useTranslations('stacks')

    return (
        <section
            className="w-full lg:h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <ParticleComponent/>
            <div className="container rounded flex items-start flex-col-reverse lg:flex-row">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:max-w-[530px]"
                >
                    <p className="font-mono text-teal-400" id='whoiam'>{translateHero('title')}</p>
                    <h2 className="text-4xl font-medium mt-2">
                        {translateHero('name')}
                    </h2>
                    <p className="text-gray-200 text-base sm:text-base">
                        {translateHero('description1')}
                    </p>
                    <p>
                        {translateHero('description2')}
                    </p>
                    <p>
                        {translateHero('description3')}

                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
                        {translateStacks.raw('list').map((stack: any, i: number) => (
                            <TechBadge
                                key={`intro-tech-${stack.stack}`}
                                name={stack.stack}
                                initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                transition={{duration: 0.5, delay: i * 0.1}}
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 200, scale: 0.5}}
                    exit={{opacity: 0, y: 200, scale: 0.5}}
                    whileInView={{opacity: 1, y: 0, scale: 1}}
                    transition={{duration: 0.5}}
                    className="w-full lg:h-[500px] flex items-center justify-center lg:ml-36"
                >
                    <Image
                        width={420}
                        height={420}
                        src="/images/wendersonFazan.jpg"
                        alt="foto de perfil"
                        className="p-1 border-2 border-teal-500 w-[300px] h-full lg:w-[420px] mb-6 lg:mb-0 lg:rounded-lg rounded-full object-cover hover:shadow-button hover:border-teal-200 transition-all"
                    />
                </motion.div>
            </div>
        </section>
    )
}
