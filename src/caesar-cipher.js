const caesarCipher = (string, shift) => {
  const alphabet = ['a','b','c','d','e','f','g',
                    'h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u',
                    'v','w','x','y','z']
  const chars = string.split('')
  const cipher = chars.map(char => {
    let index = alphabet.indexOf(char.toLowerCase())
    if (index === -1){
      return char
    }
    let newIndex = (index + shift) % 26

    if (checkUpperCase(char) === true){
      return alphabet[newIndex].toUpperCase() 
    }

    return alphabet[newIndex] 
  })

  return cipher.join('')
}

function checkUpperCase(char) {
  return /[A-Z]/.test(char)
}

module.exports = caesarCipher