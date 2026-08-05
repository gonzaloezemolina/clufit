/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#28417F",
        secondary: "#4BAAF8",
        accent: "#C9D5EB",
        "background-light": "#F6F8FC",
        "background-dark": "#0E101C",
        surface: "#FFFFFF",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
      },
      borderRadius: {
        sm: "12px",
        md: "18px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
