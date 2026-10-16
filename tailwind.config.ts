import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F3459',
          card: '#183F67',
          line: '#2B5079',
          soft: '#3D5E80',
        },
        rose: {
          DEFAULT: '#DAAAB2',
          ink: '#9A5262',
          deep: '#8A4656',
          soft: '#F3DCE1',
          'on-navy': '#E6B9C2',
        },
        blush: {
          DEFAULT: '#FEF9FA',
          2: '#F6E6EA',
        },
        'pink-pale': '#EED3D7',
        mauve: '#E0D5DB',
        sky: '#D5E0EA',
        steel: {
          DEFAULT: '#5C7E9B',
          light: '#7E9BB4',
        },
        body: '#33445A',
        muted: '#5A6779',
        line: '#EADDE2',
        'input-border': '#D9C9D0',
        'on-navy': '#C9D5E2',
        'on-navy-dim': '#AFC0D2',
      },
      fontFamily: {
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
      },
      fontSize: {
        eyebrow: ['13px', { lineHeight: '1.2', letterSpacing: '0.18em', fontWeight: '600' }],
        'display-1': ['clamp(44px, 6.4vw, 84px)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(42px, 5.6vw, 76px)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(34px, 4vw, 52px)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-4': ['clamp(32px, 3.6vw, 46px)', { lineHeight: '1.1', letterSpacing: '-0.012em' }],
        'display-5': ['clamp(28px, 3vw, 38px)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        lead: ['clamp(18px, 1.6vw, 21px)', { lineHeight: '1.6' }],
      },
      borderRadius: {
        arch: '999px 999px 24px 24px',
        'arch-sm': '160px 160px 20px 20px',
        'arch-down': '20px 20px 999px 999px',
      },
      boxShadow: {
        float: '0 18px 40px rgba(15, 52, 89, 0.12)',
        nav: '0 10px 30px -18px rgba(15, 52, 89, 0.35)',
      },
      maxWidth: {
        container: '1240px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
