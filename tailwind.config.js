const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "lg-md": "1045px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "4xl": "1920px",
      },
      animation: {
        "text-scroll": "text-scroll 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        float: "float 2s ease-in-out infinite",
        wave: "wave 1s ease-in-out infinite",
        "jello-horizontal": "jello-horizontal 0.9s both",
      },
      keyframes: {
        "text-scroll": {
          "0%": {
            transform: "translateY(40%)",
          },
          "100%": {
            transform: "translateY(10%)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        wave: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "jello-horizontal": {
          "0%, 100%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(-25px)" },
          "50%": { transform: "translateX(15px)" },
        },
      },
      colors: {
        "btn-purple": "rgb(28, 90, 122)",
        "btn-highlight": "rgba(250, 250, 250, 0.678)",
        "btn-shadow": "rgba(250, 250, 250, 0.137)",
      },
      boxShadow: {
        "inset-1": "0px 10px 10px rgb(210, 187, 253) inset",
        "inset-2": "0px -10px 10px rgb(124, 54, 255) inset",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          ".before-content": {
            content: '""',
          },
        },
        ["before", "after"]
      );
    }),
  ],
};
