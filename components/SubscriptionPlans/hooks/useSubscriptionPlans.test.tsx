import "@testing-library/jest-dom/extend-expect"
import { renderHook } from "@testing-library/react-hooks"

import { useSubscriptionPlans, Plan } from "./useSubscriptionPlans"

type Plans = Plan[]

describe("useSubscriptionPlans", function () {
  describe("plans", function () {
    it("Should not be empty", function () {
      const {
        result: {
          current: { plans },
        },
      } = renderHook(() => useSubscriptionPlans())

      expect(plans.length).toBeGreaterThan(0)
    })
  })
})
