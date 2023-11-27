const calculator = require('../src/calculator.js')

test('add 2 integers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})
test('add 2 floats', () => {
  expect(calculator.add(1.5, 2.7)).toBe(4.2)
})

test('subtract 2 integers', () => {
  expect(calculator.substract(1, 2)).toBe(-1)
})
test('subtract 2 floats', () => {
  expect(calculator.substract(1.5, 2.7)).toBe(-1.2)
})

test('multiply 2 integers', () => {
  expect(calculator.multiply(12, 27)).toBe(324)
})
test('multiply 2 floats', () => {
  expect(calculator.multiply(1.5, 2.7)).toBe(4.05)
})
test('multiply a number by 0', () => {
  expect(calculator.multiply(1.5, 0)).toBe(0)
})

test('divide 2 numbers', () => {
  expect(calculator.divide(1.5, 3)).toBe(0.5)
})
test('divide by 0', () => {
  expect(calculator.divide(1.5, 0)).toBe(null)
})
