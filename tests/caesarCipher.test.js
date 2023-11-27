const caesarCipher = require('../src/caesar-cipher.js')

test('basic word', () => {
  expect(caesarCipher('qwerty', 3)).toBe('tzhuwb')
})

test('multiple words with spaces and punctuations', () => {
  expect(caesarCipher('multiple, words.', 9))
    .toBe('vducryun, fxamb.')
})

test('phrase with lowercased and uppercased letters', () => {
  expect(caesarCipher('My Superbe PhRAse With A lot oF CaPS', 6))
    .toBe('Se Yavkxhk VnXGyk Cozn G ruz uL IgVY')
})