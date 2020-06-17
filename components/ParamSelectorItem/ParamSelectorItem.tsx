/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"

import { useSubscriptionPlans } from "../SubscriptionPlans/hooks/useSubscriptionPlans"

function ParamSelectorItem({ param, plans, selectedPlan }) {
  const {
    selectedParamValues,
    handleSetParamValues,
    getIsPlanValid,
  } = useSubscriptionPlans()
  const { name, icon, text, options } = param

  return (
    <Flex
      sx={{
        flexDirection: ["column"],
      }}
    >
      <Flex
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
          const isSelected = selectedPlan && selectedPlan[name] === value

          /**
           * Check if the current parameter would be valid if selected
           * so we can disable it if necessary
           *
           */
          const isValid = getIsPlanValid(plans, {
            ...selectedParamValues,
            [name]: value,
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
    </Flex>
  )
}

export default ParamSelectorItem
