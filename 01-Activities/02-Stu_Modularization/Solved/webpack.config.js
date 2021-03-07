// Requires path module
const path = require('path');

module.exports = {
  // Sets entry point to the index.js file
  entry: './src/index.js',
  output: {
    // Sets output file to main.js
    filename: 'main.js',
    // Sets path of output file to `dist` directory
    path: path.resolve(__dirname, 'dist'),
  },
  // Sets mode to development. Other options are production and none. 
  mode: 'development'
};
