/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#050505',
                accent: '#FF4500', // High-vis athletic orange
                background: '#EAE8E3', // Raw papyrus/concrete
                dark: '#111111',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                drama: ['Playfair Display', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
