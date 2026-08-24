/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // taken from the JamSai logo: deep navy + cyan
        ink: '#0A1E33',
        deep: '#06141F',
        night: '#08202F',
        surface: '#10304C',
        line: '#1D4266',
        accent: '#3EC6E0',
        accentHi: '#63D5EC',
        cream: '#F2F0EA',
        muted: '#8AA6BC',
        body: '#A3BDD1',
        soft: '#BFD5E4'
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif']
      },
      keyframes: {
        kenburns: { '0%': { transform: 'scale(1.04)' }, '100%': { transform: 'scale(1.16) translate3d(-1.5%,-1.5%,0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulsering: {
          '0%': { boxShadow: '0 0 0 0 rgba(62,198,224,.45)' },
          '70%': { boxShadow: '0 0 0 16px rgba(62,198,224,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(62,198,224,0)' }
        },
        slidedown: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } }
      },
      animation: {
        kenburns: 'kenburns 24s ease-in-out infinite alternate',
        marquee: 'marquee 38s linear infinite',
        pulsering: 'pulsering 3.4s ease-out infinite',
        slidedown: 'slidedown .26s ease both'
      }
    }
  },
  plugins: []
};
