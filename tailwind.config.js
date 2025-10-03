/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background: '#0B1220',
        surface1: '#0F172A',
        surface2: '#111827',
        stroke: '#1F2937',
        primary: {
          DEFAULT: '#60A5FA',
          500: '#60A5FA',
          600: '#4F46E5',
        },
        accent: '#8B5CF6',
        text: {
          DEFAULT: '#E5E7EB',
          muted: '#9CA3AF',
        },
        success: '#34D399',
        warning: '#F59E0B',
        danger: '#F43F5E',
        info: '#38BDF8',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
