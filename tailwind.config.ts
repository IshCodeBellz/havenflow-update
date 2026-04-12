import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: '0 4px 28px -6px rgba(26, 76, 125, 0.14), 0 12px 40px -16px rgba(26, 76, 125, 0.1)',
        card: '0 2px 8px -2px rgba(26, 76, 125, 0.06), 0 12px 32px -12px rgba(26, 76, 125, 0.1)',
        'card-hover':
          '0 8px 28px -6px rgba(26, 76, 125, 0.12), 0 20px 48px -16px rgba(202, 155, 171, 0.18)',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 90% 70% at 100% 0%, rgba(202, 155, 171, 0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(26, 76, 125, 0.35) 0%, transparent 50%)',
        'section-fade': 'linear-gradient(180deg, #f9f7f4 0%, #ffffff 100%)',
      },
      colors: {
        navy: {
          DEFAULT: '#1A4C7D',
          deep:    '#123B66',
          darker:  '#0E2F54',
        },
        rose: {
          DEFAULT: '#CA9BAB',
          dark:    '#B98496',
          light:   '#DAB3BF',
          pale:    '#F8EEF1',
        },
        slate: {
          muted:  '#a8b4d8',
          mid:    '#7a8db8',
          dim:    '#4a5578',
          soft:   '#6a7499',
        },
        cream: {
          DEFAULT: '#f9f7f4',
          border:  '#f4f2ee',
          light:   '#f0eee8',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.12' }],
        '6xl': ['3.625rem', { lineHeight: '1.1' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
