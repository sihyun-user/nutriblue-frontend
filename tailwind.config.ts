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
          0: '#ffffff',
          50: '#f5f8fc',
          100: '#f2f3f5',
          200: '#e5e7eb',
          300: '#d1d5d5',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#525866',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        blue: {
          100: '#e3eef7',
          200: '#b5cee3',
          300: '#8fb5d6',
          400: '#6a9ccb',
          500: '#276b5a',
          600: '#003c70',
          700: '#002a4e',
          800: '#001e38',
          900: '#00172b'
        }
      },
      boxShadow: {
        1: '0 6px 6px -2px #00000066'
      }
    }
  },
  plugins: []
};
export default config;
