/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f4f6f7',
          100: '#e4e9e9',
          200: '#cbd4d6',
          300: '#a7b6b9',
          400: '#7c8f94',
          Default: '#617479',
          600: '#536267',
          700: '#475257',
          800: '#3f474b',
          900: '#383e41',
          950: '#232829',
      },
      secondary: {
        50: '#f5f8f6',
        100: '#ddeae2',
        200: '#bbd4c6',
        300: '#7daa92',
        400: '#6a9781',
        Default: '#507c66',
        600: '#3e6352',
        700: '#345143',
        800: '#2d4239',
        900: '#283931',
        950: '#141f1b',
      },
        accent: '#B27092',
        black : '#393e41',
      },
      fontSize: {
        'display': ['5rem', {
          lineHeight: '100%',
          fontWeight: '800'
        }],
        'title-lg': ['2rem', {
          lineHeight: '100%',
          fontWeight: '800'
        }],
        'title-base': ['1.5rem', {
          lineHeight: '100%',
          fontWeight: '800'
        }],
        'title-sm': ['1rem', {
          lineHeight: '100%',
          fontWeight: '600'
        }],
        'title-xs': ['0.75rem', {
          lineHeight: '100%',
          fontWeight: '600'
        }],
        'body-lg': ['1.5rem', {
          lineHeight: '100%',
          fontWeight: '400'
        }],
        'body-base': ['1rem', {
          lineHeight: '100%',
          fontWeight: '400'

        }],
        'body-sm': ['0.75rem', {
          lineHeight: '100%',
          fontWeight: '400'
        }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}