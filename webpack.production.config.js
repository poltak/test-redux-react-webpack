import webpack      from 'webpack';
import path         from 'path';
import autoprefixer from 'autoprefixer';
import precss       from 'precss';
import env          from './.env';

const assetsDir       = path.resolve(__dirname, 'public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');

/**
 * Defines any globals needed throughout the project.
 */
const globals = {
  $:      'jquery',
  jQuery: 'jquery',
};


const config = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js'),
  ],
  output: {
    path: assetsDir,
    filename: 'bundle.js',
  },
  plugins: [
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
      // Babel 6 loader
      test:     /\.jsx?$/,
      include:  path.join(__dirname, 'src/app'),
      loader:   'babel',
      query: {
        // Allows support for ES6+ES7+JSX
        presets: ['es2015', 'react', 'stage-2'],
        plugins: ['transform-decorators-legacy'],
      },
      exclude: [nodeModulesDir],
    }, {
      // Sass loader
      test:     /\.scss$/,
      loader:   'style!css!postcss!sass',
    },  {
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
      loader:   'url?limit=100000&name=[name].[ext]',
    },
  ]},
};

export default config;
