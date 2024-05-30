'use client'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

type sectionTitleProps = {
  title: string
  subtitle: string
  className?: string
}

export const SectionTitles = ({
  subtitle,
  title,
  className,
}: sectionTitleProps) => {
  const animeProps = {
    initial: { opacity: 0, x: -100 },
    exit: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        {...animeProps}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-teal-400"
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        {...animeProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-medium"
      >
        {title}
      </motion.h3>
    </div>
  )
}
