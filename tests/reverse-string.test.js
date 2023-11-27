const reverseString = require('../src/reverse-string.js')

test('single word ', () => {
    expect(reverseString('qwerty')).toBe('ytrewq')
})

test('multiple words ', () => {
    expect(reverseString('qwerty or azerty')).toBe('ytreza ro ytrewq')
})
