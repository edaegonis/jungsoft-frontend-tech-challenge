/** @jsx jsx */
import Head from "next/head"
import { jsx, Styled, Box, Flex } from "theme-ui"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { UserIcon, KitchenToolsIcon } from "../icons"
import ParamSelectorItem from "../ParamSelectorItem/ParamSelectorItem"

function SubscriptionPlans() {
  const {
    queryResult,
    getSelectedSubscriptionPlan,
    getParamOptions,
    selectedParamValues,
    handleSetParamValues,
    getIsPlanValid,
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
        options: getParamOptions(listPlans, "numberOfPeople"),
      },
      {
        name: "weeklyRecipes",
        icon: <KitchenToolsIcon size="32px" />,
        text: (
          <span>
            Quantas receitas <br /> por semana?
          </span>
        ),
        options: getParamOptions(listPlans, "weeklyRecipes"),
      },
    ]

    const paramSelectorProps = {
      plans: listPlans,
      selectedPlan: selected,
      selectedParamValues,
      handleSetParamValues,
      getIsPlanValid,
    }

    return (
      <Flex
        bg="highlight"
        paddingY={"24px"}
        paddingX={"32px"}
        sx={{
          flexDirection: ["column", "column", "row"],
          borderRadius: "10px",
        }}
      >
        {paramsToChoose.map((param) => (
          <ParamSelectorItem
            key={param.name}
            param={param}
            {...paramSelectorProps}
          />
        ))}
      </Flex>
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

      <Flex
        bg="white"
        paddingBottom="24px"
        sx={{
          flexDirection: ["column", "column", "row"],
        }}
      >
        <Styled.img
          sx={{
            borderTopRightRadius: ["10px", "10px", "0px"],
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
      </Flex>
    </Box>
  )
}

export default SubscriptionPlans
