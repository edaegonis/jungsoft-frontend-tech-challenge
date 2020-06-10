import { renderHook } from "@testing-library/react-hooks"

import { useSubscriptionPlans } from "./useSubscriptionPlans"
import { ApolloProvider } from "@apollo/react-hooks"
import createApolloClient from "../../../lib/apollo-client"

describe("useSubscriptionPlans", function () {
  describe("plans", function () {
    const wrapper = ({ children }) => (
      <ApolloProvider client={createApolloClient(false, false)}>
        {children}
      </ApolloProvider>
    )

    it("should render loading state initially", async () => {
      const { result } = renderHook(() => useSubscriptionPlans(), {
        wrapper,
      })

      const { queryResult } = result.current

      expect(queryResult.loading).toBeTruthy()
    })
  })
})
