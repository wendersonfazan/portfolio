import { useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react"

import { TLocales, languages } from "./locales"

export default function SelectLocale() {
    const { replace } = useRouter()
    const pathName = usePathname()

    const locale = useMemo(() => {
        const path = pathName.split('/')[1]
        return path
    }, [pathName])

    const desc = useMemo(() => {
        const g = languages.find((l) => l.locale === locale)
        return g?.label
    }, [pathName])

    const handleChangeLocale = (language: TLocales) => {
        replace(`/${language}`)
    }

    return (

        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: `/locales/${locale}.svg`,
                            size: 'sm'
                        }}
                        className="transition-transform"
                        name={desc}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Trocar idioma" variant="flat" closeOnSelect>
                    {languages.map((language) => (
                        <DropdownItem key={language.locale} onClick={() => handleChangeLocale(language.locale)}>
                            <div className="flex flex-row gap-2 items-center">
                                <Avatar src={`/locales/${language.locale}.svg`} size="sm" />
                                {language.label}
                            </div>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
} 