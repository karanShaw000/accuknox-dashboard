/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: '#f0f5fa',
                secondary: '#ffffff',
            },
            textColor: {
                primary: '#000000', //black
                accent: '#b1c3d2',//greyish
                secondary: '#969ea7',
                bluish: '#14147c'//dark-blue
            },
            colors: {
                primary: '#969ea7',
                secondary: '#ffffff',
                accent: '#b1c3d2',//greyish

                bluish: '#14147c'//dark-blue
            }
        },
    },
    plugins: [],
}

