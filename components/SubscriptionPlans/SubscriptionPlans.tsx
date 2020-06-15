/** @jsx jsx */
import Head from "next/head"
import { jsx } from "theme-ui"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { withApollo } from "../../lib/apollo"

function SubscriptionPlans() {
  const { queryResult, getSelectedSubscriptionPlan } = useSubscriptionPlans()

  const { data, error, loading } = queryResult

  function renderSubscriptionPlanSelector() {
    const { listPlans } = data

    return (
      <p
        sx={{
          fontWeight: "bold",
          fontSize: 4,
          color: "background",
        }}
      >
        initial theme
      </p>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Woodspoon subscription plans that fit into your routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        renderSubscriptionPlanSelector()
      )}
    </div>
  )
}

export default withApollo({ ssr: true })(SubscriptionPlans)
