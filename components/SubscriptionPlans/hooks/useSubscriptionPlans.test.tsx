import { renderHook } from "@testing-library/react-hooks"
import { MockedProvider } from "@apollo/react-testing"

import { useSubscriptionPlans } from "./useSubscriptionPlans"

import { ALL_PLANS_QUERY } from "../../../queries/subscription-plans"

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

describe("useSubscriptionPlans", function () {
  const wrapper = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  )

  describe("queryResult", function () {
    it("should render loading state initially", async () => {
      const { result } = renderHook(() => useSubscriptionPlans(), {
        wrapper,
      })

      const { queryResult } = result.current

      expect(queryResult.loading).toBeTruthy()
    })
  })

  describe("selectedValues", function () {
    it("should default to false", async () => {
      const { result } = renderHook(() => useSubscriptionPlans(), {
        wrapper,
      })

      const { selectedValues } = result.current

      expect(selectedValues).toBeFalsy()
    })
  })

  describe("getSelectedSubscriptionPlan", function () {
    it("should return the first plan if there is no selection", async () => {
      const { result, wait } = renderHook(() => useSubscriptionPlans(), {
        wrapper,
      })

      await wait(() => expect(result.current.queryResult.data).toBeTruthy())

      expect(result.current.queryResult.data).toBeTruthy()

      const selected = result.current.getSelectedSubscriptionPlan(
        result.current.queryResult.data.listPlans
      )
      expect(selected).toEqual(result.current.queryResult.data.listPlans[0])
    })
  })
})
