function randomNumber(value1, value2) {
  return Math.floor(Math.random() * (value1 + value2));
}
// Print random value
console.log('Случайное число:', randomNumber(10, 100));
