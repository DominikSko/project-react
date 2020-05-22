// w konfiguracji webpacka używamy require zamiast import, 
// Pozwalają one na wykorzystanie pakietów NPM.
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// obiekt baseConfig zawiera te elementy konfiguracji, które są wspólne dla wersji developerskiej i produkcyjnej,
const baseConfig = () => ({
  entry: './src/index.js',  // Właściwość entry wskazuje, w którym pliku JS znajduje się główny kod aplikacji.
  output: {                 // Obiekt output wskazuje miejsce, w którym ma być wygenerowana wersja produkcyjna, stworzona za pomocą komendy npm run build. Jest też odpowiedzialny za nazwę pliku, w którym znajdzie się scalony i skonwertowany kod JS naszej aplikacji.
    path: path.join(__dirname, 'dist'),
    publicPath: '/', // związane z React Router, to ustawienie wskaże główne miejsce przechowywania assetów przez naszą aplikację. Potrzebujemy tego ustawienia, ponieważ za chwilę nasza aplikacja będzie działała pod adresami, które domyślnie są traktowane jako podkatalogi projektu.
    filename: 'scripts_bundle.js',
  },
  devServer: {  // Ustawienie historyApiFallback umożliwi serwowanie pliku index.html, a zarazem naszej aplikacji w sytuacjach, w których serwer zwróciłby błąd 404.
    historyApiFallback: true,
  },
  module: {                 // Obiekt module zawiera konfigurację dla różnych typów plików – np. dla plików JS czy SCSS.
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [                 // W obiekcie plugins mamy listę wtyczek webpacka, które są niezbędne w naszej aplikacji.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

// w devConfig znajdują się te fragmenty konfiguracji, które dotyczą wyłącznie wersji developerskiej,
const devConfig = () => ({   
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  },
});

// analogicznie, w prodConfig znajdziesz tylko fragmenty konfiguracji dotyczące wersji produkcyjnej.
const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

// Na końcu pliku znajduje się module.exports, który wyeksportuje konfigurację, aby była dostępna dla webpacka
module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
