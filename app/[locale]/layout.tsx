import { Header } from '../components/header'
import { NextIntlClientProvider, useMessages } from "next-intl";
import NextUIProviderClient from '../context/NextUIProviderClient/NextUIProviderClient'
import FloatContact from '../components/FloatContact/FloatContact';
import {Footer} from "@/app/components/footer";


export default function LocaleLayout({ children, params: { locale } }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = useMessages()

    return (
        <html lang={locale} className='dark'>
            <body className='bg-transparent'>
                <NextUIProviderClient>
                    {/* <FloatContact /> */}
                    <Header />
                    <div className="mt-24">
                        <NextIntlClientProvider messages={messages}>
                            {children}
                        </NextIntlClientProvider>
                    </div>
                    <Footer />
                </NextUIProviderClient>
            </body>
        </html>
    );
}