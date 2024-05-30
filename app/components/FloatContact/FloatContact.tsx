'use client'
import { motion } from 'framer-motion'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { BsFiletypePdf } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Tooltip, Button } from "@nextui-org/react"

const MockContacts = [
    {
        title: 'GitHub',
        url: process.env.NEXT_PUBLIC_GITHUB,
        icon: <TbBrandGithub />,
    },
    {
        title: 'LinkedIn',
        url: process.env.NEXT_PUBLIC_LINKEDIN,
        icon: <TbBrandLinkedin />,
    },
    {
        title: 'WhatsApp',
        url: process.env.NEXT_PUBLIC_WHATSAPP,
        icon: <TbBrandWhatsapp />,
    },
]

export default function FloatContact() {
    return (
        <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            className='fixed top-1/3 -translate-y-1/3 ps-2 transform left-0 z-20 flex flex-col gap-3'
            transition={{ duration: 0.5 }}
        >
            {MockContacts.map((contact, index, i: any) => (
                <Tooltip
                    key={`contact-${index}`}
                    className='bg-teal-400 shadow-button transition-all ms-1'
                    placement='right'
                    content={contact.title}
                >
                    <motion.a
                        href={contact.url}
                        target="_blank"
                        className="cursor-pointer text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-teal-400/50 hover:bg-teal-400 hover:shadow-button hover:border-2 hover:border-teal-300"
                    >
                        {contact.icon}
                    </motion.a>
                </Tooltip>
            ))}
            <Tooltip
                content='Email'
                className='bg-teal-400 shadow-button transition-all ms-1'
                placement='right'
            >
                <motion.a
                    href={process.env.NEXT_PUBLIC_EMAIL}
                    className="cursor-pointer text-gray-100 w-12 h-12 group hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-teal-400/50 hover:bg-teal-400 hover:shadow-button hover:border-2 hover:border-teal-300"
                >
                    <MdEmail />
                </motion.a>
            </Tooltip>
            <Tooltip
                content='Currículo em PDF'
                className='bg-teal-400 shadow-button transition-all ms-1'
                placement='right'
            >
                <motion.a
                    href={process.env.NEXT_PUBLIC_CURRICULUM}
                    download
                    target="_blank"
                    className="cursor-pointer text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-teal-400/50 hover:bg-teal-400 hover:shadow-button hover:border-2 hover:border-teal-300"
                >
                    <BsFiletypePdf />
                </motion.a>
            </Tooltip>
        </motion.div>
    )
}