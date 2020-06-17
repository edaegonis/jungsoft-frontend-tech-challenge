/** @jsx jsx */
import Head from "next/head"
import { jsx, Styled, Box, Flex, Container } from "theme-ui"
import { Fragment } from "react"

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
    const { price } = selected

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
      <Fragment>
        <Flex
          bg="highlight"
          paddingY={"24px"}
          paddingX={"32px"}
          marginBottom="32px"
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
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: ["center", "center", "start"],
          }}
        >
          <span
            sx={{
              marginBottom: "8px",
              color: "secondary",
              fontSize: "14px",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Preço do kit por semana
          </span>

          <span
            sx={{
              color: "#FF5C26",
              fontSize: "34px",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            <span
              sx={{
                fontSize: "18px",
                verticalAlign: "middle",
              }}
            >
              R$
            </span>
            &nbsp; {Number(price).toLocaleString("pt-BR")}
          </span>
        </Flex>
      </Fragment>
    )
  }

  return (
    <Container p={[3]}>
      <Head>
        <title>Woodspoon subscription plans that fit into your routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box p={2}>
        <Styled.h1>
          Configure o plano que <br />
          <b>melhor encaixa na sua rotina</b>
        </Styled.h1>
      </Box>

      <Flex
        bg="white"
        sx={{
          flexDirection: ["column", "column", "row"],
          paddingBottom: ["24px", "24px", "0"],
        }}
      >
        <Box
          sx={{
            flex: "1 40%",
            backgroundImage: "url('/images/bg1.jpg')",
            minHeight: ["260px", "260px", null],
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderTopRightRadius: ["10px", "10px", "0px"],
            borderTopLeftRadius: "10px",
          }}
        ></Box>

        <Flex
          marginY={32}
          paddingX={"16px"}
          sx={{
            flex: "1 60%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </Flex>
      </Flex>
    </Container>
  )
}

export default SubscriptionPlans
