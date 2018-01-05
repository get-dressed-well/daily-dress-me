const { convert } = require('./helpers');

console.log(convert(200));

export default (dictionaryObj = {
  '1': {
    type: 'sunny',
    image: 'url'
  },
  '2': {
    type: 'rainy',
    image: 'url'
  },
  '3': {
    type: 'snowy',
    image: 'url'
  },
  '4': {
    type: 'foggy',
    image: 'url'
  },
  '5': {
    type: 'extreme',
    image: 'url'
  }
});
