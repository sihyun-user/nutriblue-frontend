import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        primary: {
          50: '#fbfcfe',
          100: '#f2f3f5',
          200: '#e0e1e3',
          300: '#dadde1',
          400: '#9a9c9f',
          500: '#7e8082',
          600: '#636566',
          700: '#4F5964',
          800: '#333333',
          900: '#456268'
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
        },
        cyan: {
          50: '#f0f9f2',
          100: '#d3f2fd',
          200: '#a2e4fb',
          300: '#71d6f9',
          400: '#40c8f7',
          500: '#3bb8e4',
          600: '#0897c9',
          700: '#067298',
          800: '#044d67',
          900: '#022936'
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
