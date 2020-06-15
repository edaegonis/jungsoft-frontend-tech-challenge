import React from "react"
import NextApp from "next/app"

import ThemeWrapper from "../lib/theme-wrapper"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    )
  }
}
