/** Checks if given property values does exists in an object */
export function getDoesPropertyValuesExistsInObject(
  object: Record<string, any>,
  propertyValues: Record<string, any>
) {
  let doesAllPropertyValuesExist = true
  const keys = Object.keys(propertyValues)

  keys.map((key) => {
    if (
      object[key] &&
      parseInt(object[key]) !== parseInt(propertyValues[key])
    ) {
      doesAllPropertyValuesExist = false
    }
  })

  return doesAllPropertyValuesExist
}

export function getUniqueValuesFromArray(array: []) {
  return [...new Set(array)]
}
