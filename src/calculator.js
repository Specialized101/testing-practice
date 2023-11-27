const calculator = (() => {
  const add = (a, b) => a + b
  const substract = (a, b) => (Math.round((a - b) * 10)) / 10 
  const multiply = (a, b) => (Math.round((a * b) * 100)) / 100
  const divide = (a, b) => b === 0 ? null : Math.round((a / b) * 100) / 100
  return {
    add,
    substract,
    multiply,
    divide
  }
})();

module.exports = calculator