const plugin = require('tailwindcss/plugin')

const defaultConfig = {
  theme: {
    skeletonScreen: {
      'DEFAULT': {
        baseColor: '#c7c7c7',
        movingColor: 'linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)',
        duration: '1s',
        timing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
}

module.exports = plugin(function ({ theme, addUtilities }) {
  const utilities = Object.entries(theme('skeletonScreen', {})).map(([key, value]) => {
    let className = '.loading' + (key === 'DEFAULT' ? '' : '-' + key)

    return {
      [className]: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: value.baseColor,
      },
      [`${className}::after`]: {
        display: 'block',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: '-10rem',
        width: '10rem',
        content: "''",
        background: value.movingColor,
        animation: `skeletonloading ${value.duration} ${value.timing} infinite`,
      },
      '@keyframes skeletonloading': {
        from: {
          left: '-10rem',
        },
        to: {
          left: '100%',
        },
      },
    }
  })

  addUtilities(utilities)
}, defaultConfig)