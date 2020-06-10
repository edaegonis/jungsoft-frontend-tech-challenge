import { useQuery } from "@apollo/react-hooks"
import { useState } from "react"

import { ALL_PLANS_QUERY } from "../../../queries/subscription-plans"

export interface Plan {
  id: number
  numberOfPeople: number
  price: string
  weeklyRecipes: number
}

export function useSubscriptionPlans() {
  const [selectedPlanId, setSelectedPlanId] = useState<number | false>(false)
  const queryResult = useQuery(ALL_PLANS_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  function setSelectedSubscriptionPlanId(id: number) {
    setSelectedPlanId(id)
  }

  function getSelectedSubscriptionPlan(plans: Plan[]) {
    /** If there is no selection, returns the first plan immediately */
    if (!selectedPlanId) return plans[0]

    const selected = plans.find(({ id }) => id === selectedPlanId)

    return selected
  }

  return {
    queryResult,
    selectedPlanId,
    getSelectedSubscriptionPlan,
    setSelectedSubscriptionPlanId,
  }
}
