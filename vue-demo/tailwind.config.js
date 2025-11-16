/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      flex: [
        "Roboto Flex",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        "Segoe UI Symbol",
        '"Noto Color Emoji"',
      ],
      condensed: [
        "Roboto Condensed",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        "Segoe UI Symbol",
        '"Noto Color Emoji"',
      ],
      bebas: [
        "Bebas Neue",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        "Segoe UI Symbol",
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      blue: "#0147FF",
      navy: "#0028FF",
      white: "#FFFFFF",
      "background-white": "#F7F7F7",
      black: "#282828",
      dark: "#1D1D1B",
      transparent: "#ffffff00",
    },
    extend: {
      fontSize: {
        "header-xl": ["32px", { fontWeight: "500" }],
        "header-lg": ["25px", { fontWeight: "400", lineHeight: "37.5px" }],
        "header-md": ["16px", { fontWeight: "500" }],
        "header-sm": ["14px", { fontWeight: "500" }],
        "header-xs": ["12px", { fontWeight: "500" }],

        "paragraph-lg": ["20px", { fontWeight: "400" }],
        "paragraph-md": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
        "paragraph-sm": ["14px", { fontWeight: "400" }],
        "paragraph-xs": ["12px", { fontWeight: "400" }],
      },
      boxShadow: {
        standard: "0px 2px 3px 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
