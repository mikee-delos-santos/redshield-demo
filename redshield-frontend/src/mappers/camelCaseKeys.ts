const toCamelCase = (value: string) => {
  const tokens = value.split('_')
  if (tokens.length < 2) {
    return value
  }
  const [head, ...tail] = tokens
  return [
    head.toLowerCase(),
    ...tail.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  ].join('')
}

const camelCaseKeys = (obj: { [key: string]: any }): { [key: string]: any } => {
  if (Array.isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v))
  } else if (obj !== null && obj !== undefined && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (res, key) => ({
        ...res,
        [toCamelCase(key)]: camelCaseKeys(obj[key])
      }),
      {}
    )
  }
  return obj
}

export default camelCaseKeys