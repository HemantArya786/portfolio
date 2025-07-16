// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   /* tailwind.config.js - extend colors */
//   theme: {
//     extend: {
//       colors: {
//         primaryBlue: "#3b82f6",
//         primaryPink: "#ec4899",
//         primaryPurple: "#8b5cf6",
//         darkBg: "#0f172a",
//       },
//     },
//   },

//   plugins: [],
// };

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#6366f1", // indigo-500
        // secondary: "#a21caf", // fuchsia-700
        primary: "#ff7f50", // coral
        secondary: "#1abc9c", // turquoise
      },
    },
  },
  plugins: [],
};
