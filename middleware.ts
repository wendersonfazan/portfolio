import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR'
});

export const config = {
    matcher: ['/', '/(en|pt-BR)/:path*']
};