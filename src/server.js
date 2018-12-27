import express from 'express';
import docusign from 'docusign-esign';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';


const apiClient = new docusign.ApiClient();

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.get('/', (req, res) => {
  res.send('Holis')
})
app.listen(4000, () => {
  console.log(`Listening in ${process.env.NODE_ENV} environment`);
});
