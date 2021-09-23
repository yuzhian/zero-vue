import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  plugins: [
    require('@windicss/plugin-scrollbar'),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    require('@windicss/plugin-heropatterns')({
      patterns: [],
      colors: {
        default: '#9C92AC',
        'blue-dark': '#000044',
      },
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
  ],
})
