/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        gold: "var(--color-gold)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        muted: "var(--color-muted)",
        card: "var(--color-card)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
      },
      width: {
        mobile: "var(--mobile-width)",
      },
    },
  },
  plugins: [],
};
