
export function acquireData(input) {
  return input.split('\n')
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(','))
    .filter(line => {
      const [, country,] = line
      return country.trim() === 'India'
    })
    .map(line => {
      const [city, , phone] = line
      return { city, phone }
    })
}