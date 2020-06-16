import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"

import { withApollo } from "./apollo"
import { ALL_PLANS_QUERY } from "../queries/subscription-plans"
import { MockedProvider } from "@apollo/react-testing"

const mocks = [
  {
    request: {
      query: ALL_PLANS_QUERY,
    },
    result: {
      data: {
        listPlans: [
          {
            id: 1,
            numberOfPeople: 2,
            price: "129.99",
            weeklyRecipes: 4,
          },
          {
            id: 2,
            numberOfPeople: 3,
            price: "149.99",
            weeklyRecipes: 3,
          },
          {
            id: 3,
            numberOfPeople: 3,
            price: "179.99",
            weeklyRecipes: 4,
          },
          {
            id: 4,
            numberOfPeople: 3,
            price: "209.99",
            weeklyRecipes: 5,
          },
          {
            id: 5,
            numberOfPeople: 4,
            price: "209.99",
            weeklyRecipes: 3,
          },
          {
            id: 6,
            numberOfPeople: 4,
            price: "249.99",
            weeklyRecipes: 4,
          },
          {
            id: 7,
            numberOfPeople: 4,
            price: "289.99",
            weeklyRecipes: 5,
          },
          {
            id: 8,
            numberOfPeople: 4,
            price: "329.99",
            weeklyRecipes: 6,
          },
        ],
      },
    },
  },
]

export const MockedProviderWrapper = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
)

const WrappedWithApollo = withApollo({ ssr: true })(({ children }) => {
  return { children }
})

const customRender = (ui, options) =>
  render(ui, { wrapper: WrappedWithApollo, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
