module.exports.getQuote = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve('Don’t believe everything you read on the internet, Buddha'),
      1000,
    )
  })
}
