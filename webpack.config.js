const path = require('path');

const SRC_DIR = path.join(__dirname, '/public');
const CL_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  // context: __dirname + '/public',
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
