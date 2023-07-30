const express = require('express');

const cors = require('cors');

require('express-async-errors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
});

const routes = require('./src/routes');

app.use(routes);

const { errorHandler } = require('./src/middlewares');

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Rodandoo na porta ${PORT}`));
