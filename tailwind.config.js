module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
     'sans': [ "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif', 'ui-sans-serif', 'system-ui'],
     'serif': ['Georgia', 'ui-serif', 'serif' ],
     'mono': ['Consolas', 'Menlo', 'Monaco','ui-monospace', 'monospace'],
     'display': [],
     'body': []
    },
    extend: {
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '.75rem' }],
        '3xs': ['0.5rem', { lineHeight: '.75rem' }]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    /* require('@tailwindcss/typography') */
  ]
}
