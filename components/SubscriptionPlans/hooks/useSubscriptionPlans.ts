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
  const [selectedValues, setSelectedValues] = useState(false)
  const queryResult = useQuery(ALL_PLANS_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  function getSelectedSubscriptionPlan(plans: Plan[]) {
    /** If there is no selection, returns the first plan immediately */
    if (!selectedValues) return plans[0]

    const selected = plans[1]

    return selected
  }

  return {
    queryResult,
    selectedValues,
    getSelectedSubscriptionPlan,
  }
}
