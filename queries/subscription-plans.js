import gql from "graphql-tag"

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
