const path = require('path')

console.log(path.dirname(
  require.resolve('@babel/core/package.json')
));

console.log(require('@babel/preset-env'));