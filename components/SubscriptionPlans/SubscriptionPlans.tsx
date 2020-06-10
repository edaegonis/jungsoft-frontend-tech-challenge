import Head from "next/head"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { withApollo } from "../../lib/apollo"

function SubscriptionPlans() {
  const { queryResult } = useSubscriptionPlans()

  console.log(queryResult)

  return (
    <div className="container">
      <Head>
        <title>Woodspoon subscription plans that fit into your routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default withApollo({ ssr: true })(SubscriptionPlans)
