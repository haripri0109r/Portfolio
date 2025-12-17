/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9A227',
        secondary: '#E6C75A',
        darkBg: '#121212',
        cardBg: '#181818',
        accent: '#E6C75A',
        muted: '#94a3b8',
        surface: '#1A1A1A',
        slate: {
          50: '#EAEAEA',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px -10px rgba(201,162,39,0.45)',
        'glow-lg': '0 15px 50px -10px rgba(201,162,39,0.55)',
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        scroll: 'scroll 1.5s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        blob: 'blob 8s ease-in-out infinite',
        aurora: 'aurora 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(15px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        aurora: {
          '0%': { opacity: '0.6', transform: 'translateX(-10%)' },
          '50%': { opacity: '1', transform: 'translateX(10%)' },
          '100%': { opacity: '0.6', transform: 'translateX(-10%)' },
        },
      },
    },
  },
  plugins: [],
}
