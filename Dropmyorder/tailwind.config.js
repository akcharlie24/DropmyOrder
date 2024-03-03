/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      "kode-mono": ['"Kodo Mono"', "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      garamond: ['"EB Garamond"', "serif"],
      lora: ["Lora", "serif"],
      Namdhinggo: ["Namdhinggo", "serif"],
      Gothic: ["Nanum Gothic", "serif"],
      Kalnia: ["Kalnia", "serif"],
      Merienda: ["Merienda", "cursive"],
      "protest-guerrilla": ["Protest Guerrilla", "sans-serif"],
      Comfortaa: ["Comfortaa", "serif"],
      Rubik: ["Rubik Doodle Shadow", "serif"],
      RubikM: ["Rubik Moonrocks", 'serif'],
      RubikWet: ["Rubik Wet Paint", 'serif'],
      'protest-rev': ["Protest Revolution", 'serif'],
      Cabin: ["Cabin Sketch", 'serif'],
      Lilita: ["Lilita One", 'serif'],
      Madimi: ["Madimi One", 'serif'],
      anta: ["Anta", 'serif'],
      Dancing : ["Dancing Script", 'serif'],
      Exo: ["Exo 2", 'serif'],    
      Exo : ["Exo 2", 'serif'],    
      Signika:["Signika Negative",'serif']
    },

    extend: {grayscale: {
      50: '20%',},}
  },
  plugins: [],
}

