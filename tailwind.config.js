// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'golf-green': '#2e7d32',
          'fairway-tan': '#8d6e63',
          'sky-light': '#f0f4f8',
          'club-navy': '#1b1f23',
          'golf-bg': '#f9f9f6',
        },
        fontFamily: {
          sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
          display: ['"Playfair Display"', 'serif'],
        },
        boxShadow: {
          soft: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
    plugins: [],
  };
  