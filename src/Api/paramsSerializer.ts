const paramsSerializer = {
  serialize: (params: Record<string, any>) => {
    const pairs: string[] = []

    Object.entries(params).forEach(([key, value]) => {
      let encodedValue

      if (Array.isArray(value)) {
        encodedValue = value.map((v) => encodeURIComponent(String(v))).join(',')
      } else if (value === null || value === undefined) {
        encodedValue = ''
      } else {
        encodedValue = encodeURIComponent(String(value))
      }

      pairs.push(`${encodeURIComponent(key)}=${encodedValue}`)
    })

    return pairs.join('&')
  },
}

export default paramsSerializer
