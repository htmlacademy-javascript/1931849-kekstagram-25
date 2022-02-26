function randomNumber(value1, value2) {
  return Math.floor(Math.random() * (value1 + value2) + value1);
}
// Print random value on page
document.write('Случайное число: ', randomNumber(0, 100));

function checkLegth(string, maxLength) {
  return string.length <= maxLength;
}
checkLegth(2, 10);
