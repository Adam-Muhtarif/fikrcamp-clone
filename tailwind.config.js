/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  container: {
    center: true,
    padding: "4.5rem",
  },
  extend: {
    backgroundColor: {
      primary: "#007aff",
      secondary: "#fff2d5",
      backgroundGray: "#7b8595",
      blueLight: "#ecf5ff",
      lightGray: "#FBF9F7",
    },
    textColor: {
      primary: "#007aff",
      secondary: "#f8b336",
    },
    borderColor: {
      primary: "#007aff",
      lightGray: "#f0f0f0",
    },
  },
};
export const plugins = [];
