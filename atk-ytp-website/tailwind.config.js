/** @type {import('tailwindcss').Config} */

export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Syne'],
      serif: ['Pacifico'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Roboto'],
      heading: ['Pricedown']
    },
  },
  plugins: [],
};
