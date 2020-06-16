import { renderHook, act } from "@testing-library/react-hooks"

import { useSubscriptionPlans } from "./useSubscriptionPlans"
import { MockedProviderWrapper } from "../../../lib/test-utils"

describe("useSubscriptionPlans", function () {
  /** Test for primitive value */
  describe("queryResult", function () {
    it("should render loading state initially", async () => {
      const { result } = renderHook(() => useSubscriptionPlans(), {
        wrapper: MockedProviderWrapper,
      })

      expect(result.current.queryResult.loading).toBeTruthy()
    })
  })

  /** Feature: Read a selected subscription plan */
  describe("getSelectedSubscriptionPlan", function () {
    it("should return the first plan if there is no selection", async () => {
      const { result, wait } = renderHook(() => useSubscriptionPlans(), {
        wrapper: MockedProviderWrapper,
      })

      await wait(() => expect(result.current.queryResult.data).toBeTruthy())

      /**
       * Given There is subscription plans
       */
      expect(result.current.queryResult.data).toBeTruthy()

      const selected = result.current.getSelectedSubscriptionPlan(
        result.current.queryResult.data.listPlans
      )

      /**
       * When I check the subscription plans list
       *
       * Then Expect the selected plan to default to the first plan in the list
       */
      expect(selected).toEqual(result.current.queryResult.data.listPlans[0])
    })

    /** Feature: Change the selected subscription plan */
    it("should return the actual plan if selected", async () => {
      const { result, wait } = renderHook(() => useSubscriptionPlans(), {
        wrapper: MockedProviderWrapper,
      })

      await wait(() => expect(result.current.queryResult.data).toBeTruthy())

      /**
       * Given There is 2 subscription plans
       */
      expect(result.current.queryResult.data).toBeTruthy()

      const planToSelect = result.current.queryResult.data.listPlans[2]

      /**
       * When The current selected plan changes
       */
      act(() => {
        Object.keys(planToSelect).map((key) => {
          result.current.handleSetParamValues({
            target: {
              dataset: {
                name: key,
                value: planToSelect[key],
              },
            },
          })
        })
      })

      const actualSelected = result.current.getSelectedSubscriptionPlan(
        result.current.queryResult.data.listPlans
      )

      /** Then Expect to see the selected subscription plan */
      expect(actualSelected).toEqual(planToSelect)
    })
  })
})
