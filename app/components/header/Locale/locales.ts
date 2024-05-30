export type TLocales = 'en' | 'pt-BR'

const languages: { locale: TLocales, label: string }[] = [
    {
        locale: 'en',
        label: 'English',
    },
    {
        locale: 'pt-BR',
        label: 'Português',
    }
]

export {
    languages
}