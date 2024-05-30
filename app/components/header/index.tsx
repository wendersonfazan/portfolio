'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'
import SelectLocale from './Locale/SelectLocale'

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, paddingTop: 100 }}
            animate={{ opacity: 1, paddingTop: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 w-full z-10 h-20 flex items-center justify-center"
        >
            <div className="container flex items-center justify-between rounded-2xl px-5 py-3 border-2 border-teal-500 shadow-button hover:border-teal-200 transition-all">
                <span>⭐</span>
                {/* <Link href={'/'}>
                    <Image width={150} height={150} src="" alt="Logo Wf dev"></Image>
                </Link> */}

                <SelectLocale />


                {/*<nav className="flex items-center gap-2 sm:gap-10">*/}
                {/*    {NavItens.map((item) => (*/}
                {/*        <NavItem {...item} key={item.label}/>*/}
                {/*    ))}*/}
                {/*</nav>*/}
            </div>
        </motion.header>
    )
}
