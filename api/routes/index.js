/* eslint-disable import/extensions */
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
import router from './pessoasRoute.js';

function routes(app) {
  app.use(bodyParser.json());
  app.use(router);
}

export default routes;
// module.exports = (app) => {
//   app.use(bodyParser.json());
//   app.get('/', (req, res) => res.send('Olá'));
// };
