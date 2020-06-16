import { useQuery } from "@apollo/react-hooks"
import { useState } from "react"

import { ALL_PLANS_QUERY } from "../../../queries/subscription-plans"
import {
  getDoesPropertyValuesExistsInObject,
  getUniqueValuesFromArray,
} from "../../../helpers/functional"

export interface Plan {
  [key: string]: number | string
  id: number
  numberOfPeople: number
  price: string
  weeklyRecipes: number
}

export function useSubscriptionPlans() {
  const [selectedParamValues, setSelectedParamValues] = useState({})
  const queryResult = useQuery(ALL_PLANS_QUERY)

  function getSelectedSubscriptionPlan(plans: Plan[]) {
    const keys = Object.keys(selectedParamValues)

    /** If there is no selection, returns the first plan immediately */
    if (!keys.length) return plans[0]

    const selected = plans.find((plan) => {
      return getDoesPropertyValuesExistsInObject(plan, selectedParamValues)
    })

    return selected
  }

  function handleSetParamValues(e) {
    const value = e.target.dataset.value
    const property = e.target.dataset.name

    setSelectedParamValues((paramValues) => ({
      ...paramValues,
      [property]: value,
    }))
  }

  function getIsPlanValid(plans: Plan[], selectedParams: Record<string, any>) {
    return plans.find((plan) => {
      return getDoesPropertyValuesExistsInObject(plan, {
        ...selectedParams,
      })
    })
  }

  function getParamOptions(plans: [], paramName: string) {
    return getUniqueValuesFromArray(plans.map((plan) => plan[paramName]) as any)
  }

  return {
    queryResult,
    selectedParamValues,
    handleSetParamValues,
    getSelectedSubscriptionPlan,
    getIsPlanValid,
    getParamOptions,
  }
}
