const {getQuote} = require('./quotes')

describe('getQuote', () => {
  test('resolves the quote version callback', (done) => {
    getQuote().then((quote) => {
      expect(quote).toBe(
        'Don’t believe everything you read on the internet, Buddha',
      )
      done()
    })
  })

  test('resolves the quote version returning a promise', () => {
    return getQuote().then((quote) => {
      expect(quote).toBe(
        'Don’t believe everything you read on the internet, Buddha',
      )
    })
  })

  test('resolves the quote version async await', async () => {
    const quote = await getQuote()
    expect(quote).toBe(
      'Don’t believe everything you read on the internet, Buddha',
    )
  })
})
