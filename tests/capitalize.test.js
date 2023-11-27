
const capitalize = require('../src/capitalize.js')

test('lowercased string', () => {
  expect(capitalize('qwerty')).toBe('Qwerty')
})

test('uppercased string', () => {
  expect(capitalize('QWERTY')).toBe('Qwerty')
})

test('empty string', () => {
  expect(capitalize('')).toBe('')
})

test('string with spaces', () => {
  expect(capitalize('MY HEAD IS GONNA EXPLODE RIGHT NOW')).toBe('My Head Is Gonna Explode Right Now')
})
