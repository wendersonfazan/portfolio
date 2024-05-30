/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'hero-image': "url('/images/tec.png')",
            },
            fontFamily: {
                mono: ['var(--font-plex-mono)', 'monospace'],
            },
            boxShadow: {
                button: '0px 0px 68px 7px rgba(30, 133, 235, 0.5)',
            },
        },
    },
    plugins: [nextui()],
}
