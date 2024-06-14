'use client'
import { BsFiletypePdf } from 'react-icons/bs'
import { SectionTitles } from '../section-title'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

export const ContactForm = () => {
    const MockContacts = [
        {
            url: 'https://github.com/wendersonfazan',
            icon: <TbBrandGithub />,
        },
        {
            url: 'https://www.linkedin.com/in/wendersonfazan/',
            icon: <TbBrandLinkedin />,
        },
        {
            url: 'https://api.whatsapp.com/send/?phone=+5511983315958&text=Ol%C3%A1+Wenderson%2C+tudo+bem%3F&type=phone_number&app_absent=0',
            icon: <TbBrandWhatsapp />,
        },
    ]

    return (
        <section className="grid sm:grid-cols-2 grid-cols-1 items-center gap-2 bg-gray-950">
            <SectionTitles
                subtitle="Contato"
                title="Vamos Trabalhar juntos?"
                className="items-center text-center"
            />
            <div className="flex flex-col gap-5 items-center justify-center py-10">
                <div className="flex h-12 sm:w-72 justify-center items-center border-2 border-purple-400/50 hover:bg-purple-400 p-2 rounded cursor-default hover:shadow-button text-gray-100 transition-all">
                    Entre em contato
                </div>
                <div className="text-2xl text-gray-600 h-20 flex items-center justify-center gap-3">
                    {MockContacts.map((contact, index, i: any) => (
                        <motion.a
                            href={contact.url}
                            key={`contact-${index}`}
                            target="_blanck"
                            className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-purple-400/50 hover:bg-purple-400 hover:shadow-button hover:border-2 hover:border-purple-300"
                        >
                            {contact.icon}
                        </motion.a>
                    ))}
                    <motion.a
                        href="mailto:fazan437@gmail.com"
                        className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-purple-400/50 hover:bg-purple-400 hover:shadow-button hover:border-2 hover:border-purple-300"
                    >
                        <MdEmail />
                    </motion.a>
                    <motion.a
                        href="doc/CVWenderson.pdf"
                        download
                        target="_blank"
                        className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-purple-400/50 hover:bg-purple-400 hover:shadow-button hover:border-2 hover:border-purple-300"
                    >
                        <BsFiletypePdf />
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
