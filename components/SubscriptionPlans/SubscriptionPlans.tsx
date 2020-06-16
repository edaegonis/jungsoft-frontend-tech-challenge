/** @jsx jsx */
import Head from "next/head"
import { jsx, Styled, Flex, Box } from "theme-ui"

import { useSubscriptionPlans } from "./hooks/useSubscriptionPlans"
import { withApollo } from "../../lib/apollo"
import { UserIcon, KitchenToolsIcon } from "../icons"

function SubscriptionPlans() {
  const { queryResult } = useSubscriptionPlans()

  const { error, loading } = queryResult

  function renderSubscriptionPlanSelector() {
    return null
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

      <Box bg="white">
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

          <Box
            bg="bgdarker"
            paddingY={"24px"}
            sx={{
              borderRadius: "10px",
            }}
          >
            <Flex
              sx={{
                justifyContent: "center",
              }}
            >
              <UserIcon />
              <Styled.p>Receita para quantas pessoas?</Styled.p>
            </Flex>

            <Flex
              sx={{
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "10px",
                }}
                padding={16}
                bg="primary"
                color="#fff"
              >
                2
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                }}
                padding={16}
              >
                4
              </Box>
            </Flex>

            <Flex
              sx={{
                justifyContent: "center",
              }}
              bg="backgroundDarker"
            >
              <KitchenToolsIcon />
              <Styled.p>Quantas receitas por semana?</Styled.p>
            </Flex>

            <Flex
              sx={{
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "10px",
                }}
                padding={16}
              >
                1
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                }}
                padding={16}
                bg="primary"
                color="#fff"
              >
                2
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                }}
                padding={16}
              >
                4
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        renderSubscriptionPlanSelector()
      )}
    </Box>
  )
}

export default withApollo({ ssr: true })(SubscriptionPlans)
