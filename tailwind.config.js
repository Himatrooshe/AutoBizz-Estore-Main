module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "lg-md": "1045px", // Restored the lg-md screen breakpoint
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
      },
    },
  },
  plugins: [],
};
