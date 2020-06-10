import Head from "next/head"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"

export function SubscriptionPlans() {
  const { plans } = useSubscriptionPlans()

  console.log(plans)

  return (
    <div className="container">
      <Head>
        <title>Woodspoon - Subscription plans that fit into your routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
