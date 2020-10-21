const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        "-1": "-1",
      },
      cursor: {
        "zoom-in": "zoom-in",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
