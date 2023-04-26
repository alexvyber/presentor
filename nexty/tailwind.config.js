const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const fontSizes = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
  '10xl': ['10rem', { lineHeight: '1' }],
  '11xl': ['12rem', { lineHeight: '1' }],
  '12xl': ['14rem', { lineHeight: '1' }],
  '13xl': ['16rem', { lineHeight: '1' }],
}

const newFontSizes = []
const arrFontSizes = Array.from(Object.entries(fontSizes), (value) => value)

Object.entries(fontSizes).map((_entry, index) => {
  const step = 2

  if (index + 1 + step <= arrFontSizes.length) {
    newFontSizes.push([arrFontSizes[index][0], arrFontSizes[index + step][1]])
  }
})

const fontSize = Object.fromEntries(newFontSizes)

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize,
      fontFamily: {
        raleway: ['var(--raleway-font)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },

      listStyleType: {
        // none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        // roman: 'upper-roman',
      },

      screens: {
        '2xs': '384px',
        xs: '512px',
        base: '1142px',
        ...defaultTheme.screens,
      },

      // fontSize: {
      //   '2xs': '0.65rem',
      //   xs: '0.75rem',
      //   sm: '0.875rem',
      //   base: '1rem',
      //   lg: '1.125rem',
      //   xl: '1.25rem',
      //   '2xl': '1.5rem',
      //   '3xl': '1.875rem',
      //   '4xl': '2.25rem',
      //   '5xl': '4.2rem',
      //   '6xl': '6rem',
      //   '7xl': '7rem',
      //   '8xl': '8rem',
      //   '9xl': '4rem',
      // },

      animation: {
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          ...colors.orange,
          DEFAULT: colors.orange[300],
        },
        // gray: {
        //   100: '#f7fafc',
        //   200: '#edf2f7',
        //   300: '#e2e8f0',
        //   400: '#cbd5e0',
        //   500: '#a0aec0',
        //   600: '#718096',
        //   700: '#4a5568',
        //   800: '#2d3748',
        //   900: '#1a202c',
        // },
        // blue: {
        //   100: '#ebf8ff',
        //   200: '#bee3f8',
        //   300: '#90cdf4',
        //   400: '#63b3ed',
        //   500: '#4299e1',
        //   600: '#3182ce',
        //   700: '#2b6cb0',
        //   800: '#2c5282',
        //   900: '#2a4365',
        // },
      },

      // typography: (theme) => ({
      //   invert: {
      //     css: {
      //       '--tw-prose-body': 'var(--tw-prose-invert-body)',
      //       '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
      //       '--tw-prose-links': 'var(--tw-prose-invert-links)',
      //       '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
      //       '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
      //       '--tw-prose-underline-hover': 'var(--tw-prose-invert-underline-hover)',
      //       '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
      //       '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
      //       '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
      //       '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
      //       '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
      //       '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
      //       '--tw-prose-code': 'var(--tw-prose-invert-code)',
      //       '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
      //       '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
      //       '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
      //       '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
      //       '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
      //       '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
      //     },
      //   },
      //   DEFAULT: {
      //     css: {
      //       '--tw-prose-body': theme('colors.zinc.600'),
      //       '--tw-prose-headings': theme('colors.zinc.900'),
      //       '--tw-prose-links': theme('colors.orange.500'),
      //       '--tw-prose-links-hover': theme('colors.orange.600'),
      //       '--tw-prose-underline': theme('colors.orange.500 / 0.2'),
      //       '--tw-prose-underline-hover': theme('colors.orange.500'),
      //       '--tw-prose-bold': theme('colors.zinc.900'),
      //       '--tw-prose-counters': theme('colors.zinc.900'),
      //       '--tw-prose-bullets': theme('colors.zinc.900'),
      //       '--tw-prose-hr': theme('colors.zinc.100'),
      //       '--tw-prose-quote-borders': theme('colors.zinc.200'),
      //       '--tw-prose-captions': theme('colors.zinc.400'),
      //       '--tw-prose-code': theme('colors.zinc.700'),
      //       '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
      //       '--tw-prose-pre-code': theme('colors.sky.600'),
      //       '--tw-prose-pre-bg': theme('colors.zinc.50'),
      //       '--tw-prose-pre-border': 'transparent',
      //       '--tw-prose-th-borders': theme('colors.zinc.200'),
      //       '--tw-prose-td-borders': theme('colors.zinc.100'),
      //       '--tw-prose-invert-body': theme('colors.zinc.400'),
      //       '--tw-prose-invert-headings': theme('colors.zinc.200'),
      //       '--tw-prose-invert-links': theme('colors.orange.400'),
      //       '--tw-prose-invert-links-hover': theme('colors.orange.400'),
      //       '--tw-prose-invert-underline': theme('colors.orange.400 / 0.3'),
      //       '--tw-prose-invert-underline-hover': theme('colors.orange.400'),
      //       '--tw-prose-invert-bold': theme('colors.zinc.200'),
      //       '--tw-prose-invert-counters': theme('colors.zinc.200'),
      //       '--tw-prose-invert-bullets': theme('colors.zinc.200'),
      //       '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
      //       '--tw-prose-invert-quote-borders': theme('colors.zinc.500'),
      //       '--tw-prose-invert-captions': theme('colors.zinc.500'),
      //       '--tw-prose-invert-code': theme('colors.zinc.300'),
      //       '--tw-prose-invert-code-bg': theme('colors.zinc.200 / 0.05'),
      //       '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
      //       '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
      //       '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),
      //       '--tw-prose-invert-th-borders': theme('colors.zinc.700'),
      //       '--tw-prose-invert-td-borders': theme('colors.zinc.800'),

      //       // Base
      //       color: 'var(--tw-prose-body)',

      //       lineHeight: theme('lineHeight.7'),

      //       '> *': {
      //         marginTop: theme('spacing.10'),
      //         marginBottom: theme('spacing.10'),
      //       },

      //       p: {
      //         fontSize: theme('fontSize.xl')[0],
      //         color: "red",
      //         marginTop: theme('spacing.4'),
      //         marginBottom: theme('spacing.4'),
      //       },

      //       // Headings
      //       'h2, h3': {
      //         color: 'var(--tw-prose-headings)',
      //         fontWeight: theme('fontWeight.semibold'),
      //       },

      //       h2: {
      //         fontSize: theme('fontSize.xl')[0],
      //         lineHeight: theme('lineHeight.7'),
      //         marginTop: theme('spacing.20'),
      //         marginBottom: theme('spacing.4'),
      //       },

      //       h3: {
      //         fontSize: theme('fontSize.base')[0],
      //         lineHeight: theme('lineHeight.7'),
      //         marginTop: theme('spacing.16'),
      //         marginBottom: theme('spacing.4'),
      //       },

      //       ':is(h2, h3) + *': {
      //         marginTop: 0,
      //       },

      //       // Images
      //       img: {
      //         borderRadius: theme('borderRadius.3xl'),
      //       },

      //       // Inline elements
      //       a: {
      //         color: 'var(--tw-prose-links)',
      //         fontWeight: theme('fontWeight.semibold'),
      //         textDecoration: 'underline',
      //         textDecorationColor: 'var(--tw-prose-underline)',
      //         transitionProperty: 'color, text-decoration-color',
      //         transitionDuration: theme('transitionDuration.150'),
      //         transitionTimingFunction: theme('transitionTimingFunction.in-out'),
      //       },

      //       'a:hover': {
      //         color: 'var(--tw-prose-links-hover)',
      //         textDecorationColor: 'var(--tw-prose-underline-hover)',
      //       },

      //       strong: {
      //         color: 'var(--tw-prose-bold)',
      //         fontWeight: theme('fontWeight.semibold'),
      //       },

      //       code: {
      //         display: 'inline-block',
      //         color: 'var(--tw-prose-code)',
      //         fontSize: theme('fontSize.sm')[0],
      //         fontWeight: theme('fontWeight.semibold'),
      //         backgroundColor: 'var(--tw-prose-code-bg)',
      //         borderRadius: theme('borderRadius.lg'),
      //         paddingLeft: theme('spacing.1'),
      //         paddingRight: theme('spacing.1'),
      //       },

      //       'a code': {
      //         color: 'inherit',
      //       },

      //       ':is(h2, h3) code': {
      //         fontWeight: theme('fontWeight.bold'),
      //       },

      //       // Quotes
      //       blockquote: {
      //         paddingLeft: theme('spacing.6'),
      //         borderLeftWidth: theme('borderWidth.2'),
      //         borderLeftColor: 'var(--tw-prose-quote-borders)',
      //         fontStyle: 'italic',
      //       },

      //       // Figures
      //       figcaption: {
      //         color: 'var(--tw-prose-captions)',
      //         fontSize: theme('fontSize.sm')[0],
      //         lineHeight: theme('lineHeight.6'),
      //         marginTop: theme('spacing.3'),
      //       },

      //       'figcaption > p': {
      //         margin: 0,
      //       },

      //       // Lists
      //       ul: {
      //         listStyleType: 'disc',
      //         padding: theme('spacing.20'),
      //       },

      //       ol: {
      //         listStyleType: 'decimal',
      //       },

      //       'ul, ol': {
      //         paddingLeft: theme('spacing.6'),
      //       },

      //       li: {
      //         marginTop: theme('spacing.1.5'),
      //         marginBottom: theme('spacing.1.5'),
      //         paddingLeft: theme('spacing[1]'),
      //       },

      //       'li::marker': {
      //         fontSize: theme('fontSize.sm')[0],
      //         fontWeight: theme('fontWeight.semibold'),
      //       },

      //       'ol > li::marker': {
      //         color: 'var(--tw-prose-counters)',
      //       },

      //       'ul > li::marker': {
      //         color: 'var(--tw-prose-bullets)',
      //       },

      //       'li :is(ol, ul)': {
      //         marginTop: theme('spacing.4'),
      //         marginBottom: theme('spacing.4'),
      //       },

      //       'li :is(li, p)': {
      //         marginTop: theme('spacing.3'),
      //         marginBottom: theme('spacing.3'),
      //       },

      //       // Code blocks
      //       pre: {
      //         color: 'var(--tw-prose-pre-code)',
      //         fontSize: theme('fontSize.sm')[0],
      //         fontWeight: theme('fontWeight.medium'),
      //         backgroundColor: 'var(--tw-prose-pre-bg)',
      //         borderRadius: theme('borderRadius.2xl'),
      //         padding: theme('spacing.5'),
      //         overflowX: 'auto',
      //         border: '1px solid',
      //         borderColor: 'var(--tw-prose-pre-border)',
      //         lineHeight: 1.5,
      //       },

      //       'pre code': {
      //         display: 'inline',
      //         color: 'inherit',
      //         fontSize: 'inherit',
      //         fontWeight: 'inherit',
      //         backgroundColor: 'transparent',
      //         borderRadius: 0,
      //         padding: 0,
      //       },

      //       // Horizontal rules
      //       hr: {
      //         marginTop: theme('spacing.20'),
      //         marginBottom: theme('spacing.20'),
      //         borderTopWidth: '1px',
      //         borderColor: 'var(--tw-prose-hr)',
      //         '@screen lg': {
      //           marginLeft: `calc(${theme('spacing.12')} * -1)`,
      //           marginRight: `calc(${theme('spacing.12')} * -1)`,
      //         },
      //       },

      //       // Tables
      //       table: {
      //         width: '100%',
      //         tableLayout: 'auto',
      //         textAlign: 'left',
      //         fontSize: theme('fontSize.sm')[0],
      //       },

      //       thead: {
      //         borderBottomWidth: '1px',
      //         borderBottomColor: 'var(--tw-prose-th-borders)',
      //       },

      //       'thead th': {
      //         color: 'var(--tw-prose-headings)',
      //         fontWeight: theme('fontWeight.semibold'),
      //         verticalAlign: 'bottom',
      //         paddingBottom: theme('spacing.2'),
      //       },

      //       'thead th:not(:first-child)': {
      //         paddingLeft: theme('spacing.2'),
      //       },

      //       'thead th:not(:last-child)': {
      //         paddingRight: theme('spacing.2'),
      //       },

      //       'tbody tr': {
      //         borderBottomWidth: '1px',
      //         borderBottomColor: 'var(--tw-prose-td-borders)',
      //       },

      //       'tbody tr:last-child': {
      //         borderBottomWidth: 0,
      //       },

      //       'tbody td': {
      //         verticalAlign: 'baseline',
      //       },

      //       tfoot: {
      //         borderTopWidth: '1px',
      //         borderTopColor: 'var(--tw-prose-th-borders)',
      //       },

      //       'tfoot td': {
      //         verticalAlign: 'top',
      //       },

      //       ':is(tbody, tfoot) td': {
      //         paddingTop: theme('spacing.2'),
      //         paddingBottom: theme('spacing.2'),
      //       },

      //       ':is(tbody, tfoot) td:not(:first-child)': {
      //         paddingLeft: theme('spacing.2'),
      //       },

      //       ':is(tbody, tfoot) td:not(:last-child)': {
      //         paddingRight: theme('spacing.2'),
      //       },

      //       // ".title-file": {
      //       //   marginBottom: "-55px",

      //       //   backgroundColor: theme("colors.zinc.200"),
      //       // },
      //     },
      //   },
      // }),
    },
  },
  plugins: [],
}
