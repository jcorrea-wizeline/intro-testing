const calculator = require('./calculator')

describe('calculator', () => {
  test('sums two numbers', () => {
    expect(calculator.sum(1, 2)).toEqual(3)
  })

  test('substracts two numbers', () => {
    expect(calculator.subs(5, 2)).toEqual(3)
  })

  test.todo('multitplies two numbers')

  test.todo('divides two numbers')
})
