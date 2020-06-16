/** @jsx jsx */
import Head from "next/head"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { Fragment } from "react"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { UserIcon, KitchenToolsIcon } from "../icons"
import {
  getUniqueValuesFromArray,
  getDoesPropertyValuesExistsInObject,
} from "../../helpers/functional"

function SubscriptionPlans() {
  const {
    queryResult,
    selectedParamValues,
    getSelectedSubscriptionPlan,
    handleSetParamValues,
  } = useSubscriptionPlans()

  const { data, error, loading } = queryResult

  function renderSubscriptionPlanSelector() {
    const { listPlans } = data
    const selected = getSelectedSubscriptionPlan(listPlans)

    const paramsToChoose = [
      {
        name: "numberOfPeople",
        icon: <UserIcon size="32px" />,
        text: (
          <span>
            Receita para <br />
            quantas pessoas?
          </span>
        ),
        options: getUniqueValuesFromArray(
          listPlans.map(({ numberOfPeople }) => numberOfPeople)
        ),
      },
      {
        name: "weeklyRecipes",
        icon: <KitchenToolsIcon size="32px" />,
        text: (
          <span>
            Quantas receitas <br /> por semana?
          </span>
        ),
        options: getUniqueValuesFromArray(
          listPlans.map(({ weeklyRecipes }) => weeklyRecipes)
        ),
      },
    ]

    return (
      <Box
        bg="highlight"
        paddingY={"24px"}
        paddingX={"32px"}
        sx={{
          borderRadius: "10px",
        }}
      >
        {paramsToChoose.map(({ name, icon, text, options }) => (
          <Fragment key={name}>
            <Flex
              key={name}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <span sx={{ marginRight: "12px" }}>{icon}</span>
              <span sx={{ color: "accent" }}>{text}</span>
            </Flex>
            <Flex
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              {options.map((value) => {
                const isSelected = selected && selected[name] === value

                /**
                 * Check if the current parameter would be valid if selected
                 * so we can disable it if necessary
                 *
                 */
                const isValid = listPlans.find((plan) => {
                  return getDoesPropertyValuesExistsInObject(plan, {
                    ...selectedParamValues,
                    [name]: value,
                  })
                })

                return (
                  <Box
                    key={name + value}
                    sx={{
                      borderRadius: "10px",
                      opacity: isValid ? "1" : "0.4",
                    }}
                    paddingY={"12px"}
                    paddingX={"20px"}
                    bg={isSelected ? "primary" : isValid ? "white" : "#fafafa"}
                    color={isSelected ? "white" : "#AEB2B8"}
                    data-name={name}
                    data-value={value}
                    onClick={isValid ? handleSetParamValues : null}
                  >
                    <span sx={{ fontSize: "28px" }}>{value}</span>
                  </Box>
                )
              })}
            </Flex>
          </Fragment>
        ))}
      </Box>
    )
  }

  return (
    <Box p={[3]}>
      <Head>
        <title>Woodspoon subscription plans that fit into your routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box p={2}>
        <Styled.h1>
          Configure o plano que{" "}
          <b>
            melhor encaixa na <br /> sua rotina
          </b>
        </Styled.h1>
      </Box>

      <Box bg="white" paddingBottom="24px">
        <Styled.img
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          src="/images/bg1.jpg"
        />

        <Box marginY={32} paddingX={"16px"}>
          <Styled.h2>
            Gostou e ainda não é assinante? <br /> Escolha já um plano semanal!
          </Styled.h2>

          {loading ? (
            <p>loading...</p>
          ) : error ? (
            <p>error</p>
          ) : (
            <div data-testid="plans">{renderSubscriptionPlanSelector()}</div>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default SubscriptionPlans
