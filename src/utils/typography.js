import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Rubik",
      styles: ["700"],
    },
    {
      name: "Lato",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Rubik", "Helvetica Neue", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Lato", "serif"],
})

export default typography
