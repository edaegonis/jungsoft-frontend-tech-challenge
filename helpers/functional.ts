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

export function getUniqueValuesFromArray(array) {
  return [...new Set(array)]
}
