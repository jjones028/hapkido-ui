import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': '#DEDAD7',
                'secondary': '#DEDAD7',
                'accent': '#B4BFC5',
                'background': '#575C5F',
            }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        prefix: "nextui",
        defaultTheme: "dark"
    })],
}

