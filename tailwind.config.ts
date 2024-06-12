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
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5d5',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#525866',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
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
