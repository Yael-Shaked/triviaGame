/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "600px",
        "custom-wide": "500px",
        'icon-large': '70px',
        "score-wide":"150px",
        "counter-wide":"50px"
      },
      borderColor: {
        custom: "#0369a1",
      },
      height: {
        'icon-large': '48px', 
      },
    },
  },

  plugins: [],
};
