import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        "primary-500": "#FFAD26",
        "secondary-500": "#0D1717",
        "light-50": "#FFFBF3",
        "light-100": "#FDFEFA",
        "light-200": "#BDBDBD",
        "light-300": "#FFB48B",
        "light-400": "#DEBC82",
        "dark-300": "#8C7424",
        "dark-400": "#7C7B7B",
        "dark-500": "#504538"
      },
      fontFamily: {
        alvenir: ['var(--font-alvenir)'],
        bellefair: ['var(--font-inter)'],
      },
      boxShadow: {
        'custom-sm': '0 0.2px 4px 0 rgba(80, 69, 56, .20)',
        'custom': '0 4px 4px 0 rgba(0, 0, 0, .25)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
      },
    },
  },
  plugins: [],
};
export default config;
