/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '192': '48rem',
        '256': '64rem',
      },
    },
  },
  plugins: [],
}

