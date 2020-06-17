/** @jsx jsx */
import { jsx, Flex, Box, Grid } from "theme-ui"

function ParamSelectorItem({
  param,
  plans,
  selectedPlan,
  selectedParamValues,
  handleSetParamValues,
  getIsPlanValid,
}) {
  const { name, icon, text, options } = param

  return (
    <Flex
      sx={{
        flexDirection: ["column"],
        "&:not(:last-child)": {
          marginRight: [null, null, "120px"],
        },
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
      <Grid
        sx={{
          gridTemplate: "auto / auto auto auto",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: ["32px", "32px", "0"],
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
                cursor: "pointer",
                transition: "all .4s linear",
              }}
              paddingY={"12px"}
              paddingX={"20px"}
              bg={isSelected ? "primary" : isValid ? "white" : "#fafafa"}
              color={isSelected ? "white" : "#AEB2B8"}
              data-name={name}
              data-value={value}
              onClick={isValid ? handleSetParamValues : null}
            >
              <span sx={{ fontSize: "28px", pointerEvents: "none" }}>
                {value}
              </span>
            </Box>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default ParamSelectorItem
