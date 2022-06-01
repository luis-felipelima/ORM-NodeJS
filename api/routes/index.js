/* eslint-disable import/extensions */
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
import pessoa from './pessoasRoute.js';
import nivel from './nivelRoute.js';
import turma from './turmaRoute.js';

function routes(app) {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    pessoa,
    nivel,
    turma,
  );
}

export default routes;
// module.exports = (app) => {
//   app.use(bodyParser.json());
//   app.get('/', (req, res) => res.send('Olá'));
// };
