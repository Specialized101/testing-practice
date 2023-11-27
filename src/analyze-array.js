const analyzeArray = (array) => {

  function sumArray(array) {
    return array.reduce((sum, item) => sum + item, 0)
  }

  return {
    average: sumArray(array) / array.length,
    min: array.reduce((min, n) => Math.min(min, n)),
    max: array.reduce((min, n) => Math.max(min, n)),
    length: array.length
  }
}

module.exports = analyzeArray