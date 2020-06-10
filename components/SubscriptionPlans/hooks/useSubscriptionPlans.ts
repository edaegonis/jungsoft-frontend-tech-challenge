import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

export interface Plan {
  id: number
  numberOfPeople: number
  price: string
  weeklyRecipes: number
}

export const ALL_PLANS_QUERY = gql`
  query {
    listPlans {
      id
      weeklyRecipes
      numberOfPeople
      price
    }
  }
`

const plans: Plan[] = [
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
]

export function useSubscriptionPlans() {
  const queryResult = useQuery(ALL_PLANS_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  return {
    queryResult,
  }
}
