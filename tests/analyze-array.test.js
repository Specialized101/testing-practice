const analyzeArray = require('../src/analyze-array.js')

test('array of 6 integers', () => {
  const array = [1, 2, 3, 4, 5, 6]
  const res = {
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  }
  expect(analyzeArray(array)).toStrictEqual(res)
})