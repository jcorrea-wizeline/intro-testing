const {getRandomNumberFact} = require('./numbers-facts')
const {getRandomNumberFactService} = require('./number-facts-service')

jest.mock('./number-facts-service')

const fakeResponse = {
  text: '652 is the year that Khazaria becomes an independent state (approximate date).',
}

beforeEach(() => {
  getRandomNumberFactService.mockClear()
})

test('getRandomNumberFact', async () => {
  getRandomNumberFactService.mockReturnValueOnce(fakeResponse)

  const result = await getRandomNumberFact()
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1)
  expect(result.text).toBe(fakeResponse.text)
})

test('getRandomNumberFact error', async () => {
  getRandomNumberFactService.mockReturnValueOnce(new Error('ups'))

  const result = await getRandomNumberFact()
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1)
  expect(result).toBeInstanceOf(Error)
})
