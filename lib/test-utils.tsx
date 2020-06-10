import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"

import { withApollo } from "./apollo"

const WrappedWithApollo = withApollo({ ssr: true })(({ children }) => {
  return { children }
})

const customRender = (ui, options) =>
  render(ui, { wrapper: WrappedWithApollo, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
