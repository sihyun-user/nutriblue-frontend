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
          100: '#f1f0ee',
          200: '#e4e2df',
          300: '#dadde1',
          400: '#9a9c9f',
          500: '#828282',
          600: '#636566',
          700: '#686868',
          800: '#333333',
          900: '#456268'
        },
        blue: {
          50: '#d6e4f0',
          100: '#e3eef7',
          200: '#ccdeed',
          300: '#8fb5d6',
          400: '#6a9ccb',
          500: '#5f8cb6',
          600: '#003c70',
          700: '#002a4e',
          800: '#001e38',
          900: '#00172b',
          950: '#00687B'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#8c929d',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        cyan: {
          50: '#dbf4fd',
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
