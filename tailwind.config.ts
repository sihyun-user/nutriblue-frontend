import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f3f5',
          100: '#e9edf2',
          200: '#dadde1',
          300: '#b9bbbe',
          400: '#9a9c9f',
          500: '#7e8082',
          600: '#636566',
          700: '#4f4f4f',
          800: '#333333',
          900: '#181919'
        },
        blue: {
          50: '#f5f8fc',
          100: '#e3eef7',
          200: '#ccdeed',
          300: '#8fb5d6',
          400: '#6a9ccb',
          500: '#005a8d',
          600: '#003c70',
          700: '#002a4e',
          800: '#001e38',
          900: '#00172b',
          950: '#00687B'
        }
      },
      boxShadow: {
        '1': '0 6px 6px -2px #00000066'
      }
    }
  },
  plugins: []
};
export default config;
