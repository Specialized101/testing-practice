const capitalize = (string) => {
  const words = string.split(' ')
  const capitalizedWords = words.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  return capitalizedWords.join(' ')
}

module.exports = capitalize
