/** @jsx jsx */
import Head from "next/head"
import { jsx, Styled, Flex, Box } from "theme-ui"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { withApollo } from "../../lib/apollo"
import { UserIcon, KitchenToolsIcon } from "../icons"

function SubscriptionPlans() {
  const {
    queryResult,
    getSelectedSubscriptionPlan,
    handleSetParamValues,
  } = useSubscriptionPlans()

  const { data, error, loading } = queryResult

  function renderSubscriptionPlanSelector() {
    const { listPlans } = data

    if (!listPlans || !listPlans.length) {
      return <p>Nenhum plano encontrado</p>
    }

    const selected = getSelectedSubscriptionPlan(listPlans)

    const availableNumberOfPeople = [2, 4]
    const availableWeeklyRecipes = [1, 2, 4]

    console.log(selected)
    return (
      <Box
        bg="highlight"
        paddingY={"24px"}
        paddingX={"32px"}
        sx={{
          borderRadius: "10px",
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <span sx={{ marginRight: "12px" }}>
            <UserIcon size="32px" />
          </span>
          <span sx={{ color: "accent" }}>
            Receita para <br />
            quantas pessoas?
          </span>
        </Flex>

        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          {availableNumberOfPeople.map((value) => (
            <Box
              key={value}
              sx={{
                borderRadius: "10px",
              }}
              paddingY={"12px"}
              paddingX={"20px"}
              bg="primary"
              color="white"
              data-name="numberOfPeople"
              data-value={value}
              onClick={handleSetParamValues}
            >
              <span sx={{ fontSize: "28px" }}>{value}</span>
            </Box>
          ))}
        </Flex>

        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "28px",
          }}
          bg="highlight"
        >
          <span sx={{ marginRight: "12px" }}>
            <KitchenToolsIcon size="32px" />
          </span>
          <span sx={{ color: "accent" }}>
            Quantas receitas <br /> por semana?
          </span>
        </Flex>

        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {availableWeeklyRecipes.map((value) => (
            <Box
              key={value}
              sx={{
                borderRadius: "10px",
              }}
              paddingY={"12px"}
              paddingX={"20px"}
            >
              <span sx={{ fontSize: "28px" }}>{value}</span>
            </Box>
          ))}
        </Flex>
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
            renderSubscriptionPlanSelector()
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default withApollo({ ssr: true })(SubscriptionPlans)
