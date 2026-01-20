import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': '#121314',
        // Gruvbox Dark theme colors
        'gruvbox-dark': {
          bg0: '#282828',
          bg1: '#3c3836',
          bg2: '#504945',
          bg3: '#665c54',
          bg4: '#7c6f64',
          fg0: '#fbf1c7',
          fg1: '#ebdbb2',
          fg2: '#d5c4a1',
          fg3: '#bdae93',
          fg4: '#a89984',
          red: '#fb4934',
          green: '#b8bb26',
          yellow: '#fabd2f',
          blue: '#83a598',
          purple: '#d3869b',
          aqua: '#8ec07c',
          orange: '#fe8019',
          gray: '#928374',
        },
        // Gruvbox Light theme colors
        'gruvbox-light': {
          bg0: '#fbf1c7',
          bg1: '#ebdbb2',
          bg2: '#d5c4a1',
          bg3: '#bdae93',
          bg4: '#a89984',
          fg0: '#282828',
          fg1: '#3c3836',
          fg2: '#504945',
          fg3: '#665c54',
          fg4: '#7c6f64',
          red: '#cc241d',
          green: '#98971a',
          yellow: '#d79921',
          blue: '#458588',
          purple: '#b16286',
          aqua: '#689d6a',
          orange: '#d65d0e',
          gray: '#928374',
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              color: theme('colors.gruvbox-light.red'),
              backgroundColor: theme('colors.gruvbox-light.bg1'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingLeft: theme('spacing.1'),
              paddingRight: theme('spacing.1'),
              paddingTop: theme('spacing.1'),
              paddingBottom: theme('spacing.1'),
              fontWeight: '500',
            },
            pre: {
              backgroundColor: theme('colors.gruvbox-light.bg1'),
              color: theme('colors.gruvbox-light.fg1'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
              fontWeight: 'inherit',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gruvbox-light.fg0'),
            },
            p: { color: theme('colors.gruvbox-light.fg1') },
            a: {
              color: theme('colors.gruvbox-light.blue'),
              '&:hover': { color: theme('colors.gruvbox-light.aqua') },
            },
            strong: { color: theme('colors.gruvbox-light.fg0') },
            blockquote: {
              color: theme('colors.gruvbox-light.fg2'),
              borderLeftColor: theme('colors.gruvbox-light.yellow'),
            },
          },
        },
        invert: {
          css: {
            code: {
              color: theme('colors.gruvbox-dark.red'),
              backgroundColor: theme('colors.gruvbox-dark.bg1'),
            },
            pre: {
              backgroundColor: theme('colors.gruvbox-dark.bg1'),
              color: theme('colors.gruvbox-dark.fg1'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
              fontWeight: 'inherit',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gruvbox-dark.fg0'),
            },
            p: { color: theme('colors.gruvbox-dark.fg1') },
            a: {
              color: theme('colors.gruvbox-dark.blue'),
              '&:hover': { color: theme('colors.gruvbox-dark.aqua') },
            },
            strong: { color: theme('colors.gruvbox-dark.fg0') },
            blockquote: {
              color: theme('colors.gruvbox-dark.fg2'),
              borderLeftColor: theme('colors.gruvbox-dark.yellow'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
