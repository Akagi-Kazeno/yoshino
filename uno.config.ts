import {defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind4} from 'unocss';

export default defineConfig({
  shortcuts: [],
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Chivo Mono',
        mono: 'Chivo Mono',
        serif: 'Chivo Mono',
      },
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  rules: [],
});
