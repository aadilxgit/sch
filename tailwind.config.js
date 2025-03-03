/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7964e4', // Updated to the requested purple
          light: '#8a76f5',
          dark: '#6753d3',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1a1a1a',
          light: '#222222',
          medium: '#2a2a2a',
          border: '#333333',
        },
      },
    },
  },
  plugins: [],
}
