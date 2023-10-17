/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        "font-base": "var(--text-base)",
      },
      colors: {
        "hover": "var(--hover)",
        "line": "var(--border)",
        "base": "var(--bg-base)",
        "primary": "var(--primary-color)",
        "success": "var(--success-color)",
        "warning": "var(--warning-color)",
        "danger": "var(--danger-color)",
        "secondary": "var(--secondary)",
      },

    }
  },
  plugins:
    [require('@tailwindcss/typography')]
};