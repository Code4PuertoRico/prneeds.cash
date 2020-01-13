export const formatDollars = raw => {
  let formatted = parseInt(raw) / 100
  return formatted.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
