/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': 'Outfit',
        'san': 'Kumbh Sans'
      }, 
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
        'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'Grayish-blue': 'hsl(220, 14%, 75%)',
        'Light-grayish-blue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

