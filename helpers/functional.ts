export function getArePropertyValuesEqual(
  object: Record<string, unknown>,
  propertyValues: Record<string, unknown>
) {
  let arePropertiesEqual = true

  const keys = Object.keys(propertyValues)

  keys.map((key) => {
    if (object[key] !== propertyValues[key]) {
      arePropertiesEqual = false
    }
  })

  return arePropertiesEqual
}
