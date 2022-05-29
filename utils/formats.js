const numberToMoney = (number) => {
  return '$' + number
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .replace('.00', '')
    .replaceAll(',', '.')
}

const firstLetterUppercase = (string) => {
  string = string.toLowerCase().split(' ').map(function (word) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    return word
  })

  return string.join(' ')
}

module.exports = { numberToMoney, firstLetterUppercase }
