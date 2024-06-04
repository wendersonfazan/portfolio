'use client'
import {SectionTitles} from '@/app/components/section-title'
import {KnownTech} from './known-tech'
import {motion} from 'framer-motion'
import {useTranslations} from 'next-intl'

export const KnownTeachs = () => {
    const translateStacks = useTranslations('stacks')
    const translateCommons = useTranslations('common')

    return (
        <section className="bg-slate-900">
            <div className="container py-16">
                <SectionTitles subtitle={translateCommons('competence')} title={translateCommons('knowledge')}/>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                    {translateStacks.raw('list').map((stack: any, i: number) => (
                        <motion.div
                            key={stack.stack}
                            initial={{opacity: 0, x: -100}}
                            exit={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: i * 0.2}}
                        >
                            <KnownTech
                                tech={{
                                    icon: stack.img,
                                    name: stack.stack,
                                    timing: stack.timing
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
