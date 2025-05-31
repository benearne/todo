const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // räumt den dist-Ordner vor jedem Build auf
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Unser HTML-Template
    }),
  ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
