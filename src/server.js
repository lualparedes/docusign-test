/**
 * @note {1} Comment out these lines when building for production.
 */

import express from 'express';
import webpack from 'webpack'; // {1}
import webpackMiddleware from 'webpack-dev-middleware'; // {1}
import webpackConfig from '../webpack.config.js'; // {1}

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig))); // {1}

app.get('/', (req, res) => {
  res.send('Hola bebé, yo se que contigo no sirve la labia 😉')
})
app.listen(4000, () => {
  console.log('Listening');
});
