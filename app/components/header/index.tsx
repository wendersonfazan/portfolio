'use client'

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
            <div className="container flex items-center justify-between rounded-2xl px-5 py-3 border-2 border-purple-500 shadow-button hover:border-purple-200 transition-all">
                <span>⭐</span>
                <SelectLocale />
            </div>
        </motion.header>
    )
}
