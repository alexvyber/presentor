import type { Config } from 'tailwindcss/types/config'

import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

import { fontSizes } from './config/tailwind/tailwind.fontsizes'
import { typography } from './config/tailwind/tailwind.typography'
import { shiftFontSizes, getSpacingRange } from './config/tailwind/helpers'

import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  darkMode: 'class',

  content: ['./pages/**/*.{tsx,mdx}', './components/**/*.{ts,tsx}'],

  theme: {
    extend: {
      fontSize: shiftFontSizes(fontSizes, 0),

      typography,

      fontFamily: {
        // raleway: ['var(--raleway-font)', 'system-ui', 'sans-serif'],
        sans: [...defaultTheme.fontFamily.sans],
      },

      listStyleType: {
        // none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        // roman: 'upper-roman',
      },

      spacing: {
        ...defaultTheme.spacing,
        ...getSpacingRange({ start: 100, numberOfNewSteps: 51, step: 1 }), // 100-300 by 4: p-100 my-104 gap-296
        ...getSpacingRange({ start: 1, numberOfNewSteps: 200, step: 0.125 }), // 1-100 by 1: p-15 p-33 my-47
      },

      screens: {
        '2xs': '384px',
        xs: '512px',
        base: '1142px',
        ...defaultTheme.screens,
      },

      animation: {
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      colors: {
        primary: {
          ...colors.orange,
          DEFAULT: colors.orange[300],
        },
      },
    },
  },

  plugins: [aspectRatioPlugin, typographyPlugin],
} satisfies Config
