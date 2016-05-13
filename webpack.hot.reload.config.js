import webpack      from 'webpack';
import path         from 'path';
import autoprefixer from 'autoprefixer';
import precss       from 'precss';
import env          from './.env';

const assetsDir = path.resolve(__dirname, 'public/assets');

/**
 * Defines any globals needed throughout the project.
 */
const globals = {
  $:      'jquery',
  jQuery: 'jquery',
};

const host = env.DEV_HOST || 'localhost';
const port = env.DEV_PORT || 4000;

/**
 * Defines the webpack config which will be exported to webpack for building.
 */
const config = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/app/index.js'),
  ],
  output: {
    path:       assetsDir,
    filename:   'bundle.js',
    publicPath: '/public/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin(globals),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
  ],
  postcss() {
    return [precss, autoprefixer];
  },
  module: {
    loaders: [{
      // React hot reloading loader
      test:     /\.jsx?$/,
      loader:   'react-hot',
      include:  path.join(__dirname, 'src/app'),
    }, {
      // Babel 6 loader
      test:     /\.jsx?$/,
      include:  path.join(__dirname, 'src/app'),
      exclude:  /node_modules/,
      loader:   'babel',
      query: {
        // Allows support for ES6+ES7+JSX
        presets: ['es2015', 'react', 'stage-2'],
      },
    }, {
      // Sass loader
      test:     /\.scss$/,
      loader:   'style!css!postcss!sass',
    }, {
      // PostCSS loader
      test:     /\.css$/,
      loader:   'style!css!postcss',
    }, {
      // JSON loader
      test:     /\.json$/,
      loader:   'json',
    }, {
      // URL loader
      test:     /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader:   'url?limit=100000@name=[name][ext]',
    }],
  },
};

export default config;
