const numberToMoney = (number) => {
  return '$' + number
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .replace('.00', '')
    .replaceAll(',', '.')
}

module.exports = { numberToMoney }
