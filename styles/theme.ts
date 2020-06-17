import { Theme } from "theme-ui"

const theme: Theme = {
  colors: {
    text: "#000",
    background: "#F5F8FA",
    primary: "#49AD33",
    secondary: "#61696F",
    accent: "#49AD33",
    highlight: "#F7F7F7",
  },
  fonts: {
    body:
      'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  text: {
    heading: {
      color: "text",
      marginBottom: 18,
      textAlign: "center",
    },
  },
  sizes: {
    container: "1180px",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    h1: {
      variant: "text.heading",
      fontSize: 30,
      fontWeight: "normal",
    },
    h2: {
      variant: "text.heading",
      fontSize: 24,
    },
    p: {
      margin: 0,
    },
    img: {
      maxWidth: "100%",
    },
  },
}

export default theme
