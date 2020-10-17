const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    gradients: (theme) => ({
      gray: [theme("colors.gray.50"), "rgba(0,0,0,0)"],
      "gray-reverse": ["rgba(0,0,0,0)", theme("colors.gray.50")],
    }),
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("./plugins/gradient")],
};
