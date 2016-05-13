/* eslint no-console:0 */
import webpack            from 'webpack';
import WebpackDevServer   from 'webpack-dev-server';
import config             from './webpack.hot.reload.config';
import env                from './.env';

process.env = env;

const port = process.env.DEV_PORT || 4000;
const host = process.env.DEV_HOST || 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath:         config.output.publicPath,
  hot:                true,
  historyApiFallback: true,
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at ${host}:${port}`);
  }
});
