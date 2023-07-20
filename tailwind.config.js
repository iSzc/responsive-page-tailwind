/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      w1440: { max: "1440px" },
      w1024: { max: "1024px" },
      w768: { max: "768px" },
      w640: { max: "640px" },
      w480: { max: "480px" },
    },
    extend: {
      backgroundImage: {
        "desktop-img": "url('/assets/images/image-web-3-desktop.jpg')",
        "mobile-img": "url('/assets/images/image-web-3-mobile.jpg')",
      },
      boxShadow: {
        "3xl": "0px 0px 10px rgba(0, 0, 0, 0.4)",
      },
      width: {
        530: "140rem",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
