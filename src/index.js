const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities }) {
    addUtilities([
      {
        '.loading': {
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#c7c7c7',
        },
        '.loading::after': {
          display: 'block',
          position: 'absolute',
          height: '100%',
          top: 0,
          left: '-10rem',
          width: '10rem',
          content: "''",
          background: 'linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)',
          animation: 'skeletonloading 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        },
        '@keyframes skeletonloading': {
          from: {
            left: '-10rem',
          },
          to: {
            left: '100%',
          },
        },
      },
    ])
  }
)