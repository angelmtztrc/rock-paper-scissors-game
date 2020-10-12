module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['src/*.svelte'],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'scissors-primary': '#ec9e0e',
        'scissors-secondary': '#eca922',
        'paper-primary': '#4865f4',
        'paper-secondary': '#5671f5',
        'rock-primary': '#dc2e4e',
        'rock-secondary': '#dd405d',
        'lizard-primary': '#834fe3',
        'lizard-secondary': '#8c5de5',
        'cyan-primary': '#40b9ce',
        'cyan-secondary': '#52bed1',
        'radial-primary': '#1f3756',
        'radial-secondary': '#141539',
        'dark': '#3b4363',
        'score': '#2a46c0',
        'gray-outline': '#606e85'
      })
    }
  },
  variants: {},
  plugins: []
};
