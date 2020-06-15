import React from "react"
import { ThemeProvider } from "theme-ui"

import theme from "../styles/theme"

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper
