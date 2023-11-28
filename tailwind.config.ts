import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
         primary: "#a8dadc",
         secondary: "#457b9d",
         accent: "#1d3557",
         neutral: "#14213d",
         "base-100": "#cdedf6",
         info: "#0077b6",
         success: "#2b9348",
         warning: "#fdc500",
         error: "#d90429",
          body: {
            "background-color": "#e3e6e6", 
          },
        },
      },
    ],
  },
}  
export default config
