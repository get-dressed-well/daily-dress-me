const convert = num => {
  /**
   * 1 sunny
   * 2 rainy
   * 3 snowy
   * 4 foggy
   * 5 extreme
   */
  let result = num.toString()[0];
  switch (result) {
    case '2':
    case '3':
    case '5':
      return '2';
    case '6':
      return '3';
    case '7':
      return '4';
    case '8':
      return '1';
    case '9':
      return '5';
    default:
      return '1';
  }
  return result;
};

module.exports = { convert };
