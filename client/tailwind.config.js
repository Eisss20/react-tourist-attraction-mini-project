/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ImbSansThai: ["IBM Plex Sans Thai"],
        NotoSans:["Noto Sans Thai"]
      },
    },
  },
  plugins: [],
}