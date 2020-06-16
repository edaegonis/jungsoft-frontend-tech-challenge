import { Theme } from "theme-ui"

const theme: Theme = {
  colors: {
    text: "#000",
    background: "#F5F8FA",
    primary: "#49AD33",
    secondary: "#609",
    test: "#f09",
    bgdarker: "#F7F7F7",
  },
  fonts: {
    body:
      'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    h1: {
      fontSize: 30,
      color: "text",
      marginBottom: 18,
      textAlign: "center",
    },
    h2: {
      fontSize: 24,
      color: "text",
      marginBottom: 18,
      textAlign: "center",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    img: {
      maxWidth: "100%",
    },
  },
}

export default theme
